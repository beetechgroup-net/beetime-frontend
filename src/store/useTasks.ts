// import { create } from "zustand"
// import { createJSONStorage, persist } from "zustand/middleware"
// import {Task} from "@/interfaces/Task";
//
// type Store = {
//   tasks: Map<number, Task>
//   setTask: (item: Task) => void
// }
//
// export const useTasksStore = create<Store>()(
//     persist(
//         (setState, getState, store) => ({
//           tasks: new Map(),
//           setTask: (item) => { setState((state) => { state.tasks.set(item.id, item)}) },
//     }),
// {
//   name: "my-tasks-storage",
//       storage: createJSONStorage(() => localStorage),
// },
// ),
// )
