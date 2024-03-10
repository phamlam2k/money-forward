'use client';

import { ITask } from '@/src/types/task.type';
import { Dispatch, createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export enum TaskActionType {
  Added = 'added',
  Deleted = 'deleted'
}

type ITaskAction = {
  type: TaskActionType;
} & ITask;

export const TasksContext = createContext<ITask[]>([]);
export const TasksDispatchContext = createContext<Dispatch<ITaskAction> | null>(
  null
);

const initialTasks: ITask[] = [];

function tasksReducer(tasks: ITask[], action: ITaskAction) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: uuidv4(),
          title: action.title,
          hours: action.hours
        }
      ];
    }
    case 'deleted': {
      return tasks.filter((task) => task.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export const TaskMngtProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
