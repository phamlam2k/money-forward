export type ITask = {
  id: string;
} & ITaskState;

export interface ITaskState {
  title?: string;
  hours?: number;
}

export interface ITasksProvider {
  tasks: ITask[];
  tasksFilter: ITask[];
  keyword: string;
}
