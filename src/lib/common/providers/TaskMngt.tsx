'use client';

import { ITasksProvider } from '@/src/types/task.type';
import { Dispatch, createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export enum TaskActionType {
  Added = 'added',
  Deleted = 'deleted',
  Search = 'search',
  Keyword = 'keyword'
}

type ITaskAction = {
  type: TaskActionType;
  id?: string;
  title?: string;
  hours?: number;
  value?: string;
};

export const TasksContext = createContext<ITasksProvider | any>({
  tasks: [],
  tasksFilter: [],
  keyword: ''
});
export const TasksDispatchContext = createContext<Dispatch<ITaskAction> | any>(
  null
);

const initialTasks: ITasksProvider = {
  tasks:
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('list') || '[]')
      : [],
  tasksFilter:
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('list') || '[]')
      : [],
  keyword: ''
};

function tasksReducer(tasksProvider: ITasksProvider, action: ITaskAction) {
  switch (action.type) {
    case TaskActionType.Added: {
      const formData = [
        ...tasksProvider.tasks,
        {
          id: uuidv4(),
          title: action.title,
          hours: action.hours
        }
      ];

      localStorage.setItem('list', JSON.stringify(formData));

      return {
        tasksFilter: formData,
        tasks: formData
      };
    }
    case TaskActionType.Deleted: {
      const filterData = [...tasksProvider.tasks].filter(
        (task) => task.id !== action.id
      );

      localStorage.setItem('list', JSON.stringify(filterData));

      return {
        tasksFilter: filterData,
        tasks: filterData
      };
    }
    case TaskActionType.Search: {
      if (!action.value)
        return {
          ...tasksProvider,
          keyword: '',
          tasksFilter: tasksProvider.tasks
        };

      return {
        ...tasksProvider,
        keyword: action.value,
        tasksFilter: [...tasksProvider.tasks].filter(
          (task) => task.title && task.title.includes(action.value as string)
        )
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export const TaskMngtProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [tasksProvider, dispatch] = useReducer<any>(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasksProvider}>
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
