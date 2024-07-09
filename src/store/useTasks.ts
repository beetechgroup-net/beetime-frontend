import { create } from 'zustand'
import {Task} from "@/interfaces/Task";


// Define the Store type
type Store = {
  _tasks: Map<number, Task>;
  getTasks: () => Task[];
  addTask: (item: Task) => void;
  removeTask: (id: number) => void;
};

// Create the store
export const useTasksStore = create<Store>((set, get) => ({
  _tasks: new Map<number, Task>(),

  getTasks: () => {
    const { _tasks } = get();
    return Array.from(_tasks.values());
  },

  addTask: (task: Task) => {
    set((state) => {
      const newTasks = new Map(state._tasks);
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
}));