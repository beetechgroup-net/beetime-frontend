import {TaskStatus} from "@/interfaces/TaskStatus";

export interface Task {
  id: number;
  description: string;
  startTime?: string;
  finishTime?: string;
  category: string;
  status: TaskStatus;
}