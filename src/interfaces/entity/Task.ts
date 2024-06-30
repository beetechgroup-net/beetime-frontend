import {History} from "@/interfaces/entity/History";
export interface Task {
  id: number;
  startTime: string;
  finishTime: string;
  duration: number;
  description: string;
  category: string;
  status: string;
  link: string;
  history: History[];
}