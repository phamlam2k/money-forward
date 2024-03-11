export type ITask = {
  id: string;
} & ITaskState;

export interface ITaskState {
  title?: string;
  hours?: number;
}
