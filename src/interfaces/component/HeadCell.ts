import {Task} from "@/interfaces/entity/Task";

export interface HeadCell {
  id: keyof Task;
  label: string;
  numeric: boolean;
}