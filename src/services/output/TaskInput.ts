import {TaskStatus} from "@/interfaces/TaskStatus";
import {TaskItemInput} from "@/services/input/TaskItemInput";

export interface TaskOutput {
  id: number;
  description: string;
  category: string;
  status: TaskStatus;
  taskItems: TaskItemInput[]
}