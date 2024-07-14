import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Task } from "@/interfaces/Task";
import { TaskStatus } from "@/interfaces/TaskStatus";
import dayjs from "dayjs";
import { TaskItem } from "@/interfaces/TaskItem";

// Define the Store type
type Store = {
  _tasks: Map<number, Task>;
  getTasks: () => Task[];
  addTask: (item: Task) => void;
  removeTask: (id: number) => void;
  finishTask: (id: number) => void;
};

// Helper function to convert Map to Array for JSON serialization
const mapToObj = (map: Map<number, Task>): Record<number, Task> => {
  const obj: Record<number, Task> = {};
  map.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
};

// Helper function to convert Array back to Map after JSON deserialization
const objToMap = (obj: Record<number, Task>): Map<number, Task> => {
  const map = new Map<number, Task>();
  Object.keys(obj).forEach((key) => {
    map.set(Number(key), obj[key]);
  });
  return map;
};

// Create the store with persistence
export const useTasksStore = create<Store>(
    persist(
        (set, get) => ({
          _tasks: new Map<number, Task>(),

          getTasks: () => {
            const { _tasks } = get();
            return Array.from(_tasks.values());
          },

          addTask: (task: Task) => {
            set((state) => {
              const newTasks = new Map(state._tasks);

              const taskItem: TaskItem = {
                id: dayjs().unix(),
                startTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
              };

              if (task.taskItems) {
                task.taskItems.push(taskItem);
              } else {
                task.taskItems = [taskItem];
              }

              newTasks.set(task.id, task);
              return { _tasks: newTasks };
            });
          },

          removeTask: (id: number) => {
            set((state) => {
              const newTasks = new Map(state._tasks);
              newTasks.delete(id);
              return { _tasks: newTasks };
            });
          },

          finishTask: (id: number) => {
            set((state) => {
              const newTasks = new Map(state._tasks);
              const task = newTasks.get(id);
              if (task) {
                task.status = TaskStatus.FINISHED;
                task.taskItems[task.taskItems.length - 1].finishTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
                newTasks.set(id, task);
              }
              return { _tasks: newTasks };
            });
          },
        }),
        {
          name: 'tasks-storage', // Name of the item in storage
          storage: createJSONStorage(() => localStorage), // Use localStorage for persistence
          partialize: (state) => ({
            ...state,
            _tasks: mapToObj(state._tasks)
          }), // Convert Map to Object for serialization
          merge: (persistedState, currentState) => ({
            ...currentState,
            _tasks: objToMap(persistedState._tasks)
          }), // Convert Object back to Map after deserialization
        }
    )
);
