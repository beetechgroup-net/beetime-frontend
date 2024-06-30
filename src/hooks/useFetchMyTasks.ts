import {Task} from "@/interfaces/entity/Task";

export function useFetchMyTasks(): Task[] {
  return [
    {
      id: 1,
      startTime: "29/06/2024 08:35:00",
      finishTime: "29/06/2024 12:25:00",
      duration: 5,
      description: "Task 323 - refatorar o frontend",
      category: "Coding",
      status: "Finished",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      history: [
        {
          id: 1,
          startTime: "29/06/2024 08:35:00",
          finishTime: "29/06/2024 09:01:00",
          duration: 2
        },
        {
          id: 2,
          startTime: "29/06/2024 09:01:00",
          finishTime: "29/06/2024 09:15:00",
          duration: 4
        },
        {
          id: 3,
          startTime: "29/06/2024 09:15:00",
          finishTime: "29/06/2024 09:30:00",
          duration: 5
        },
        {
          id: 4,
          startTime: "29/06/2024 09:30:00",
          finishTime: "29/06/2024 09:45:00",
          duration: 5
        },
        {
          id: 5,
          startTime: "29/06/2024 09:45:00",
          finishTime: "29/06/2024 10:00:00",
          duration: 5
        },
        {
          id: 6,
          startTime: "29/06/2024 10:00:00",
          finishTime: "29/06/2024 12:25:00",
          duration: 5
        },
      ]
    }
  ];
}