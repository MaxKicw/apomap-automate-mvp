import { Coordinates } from "./Coordinates";

export interface Task {
  //Unique identifier
  task_id: string;
  //Address of task in written form
  task_address: string;
  //Address of task in lat / lng coordinates
  task_coords: Coordinates;
  //Priority of task from high to low
  task_priority: 1 | 2 | 3;
}
