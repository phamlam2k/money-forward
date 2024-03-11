'use client';

import { useTasks } from '@/src/lib/common/providers/TaskMngt';
import { useMemo } from 'react';
import TotalItem from './TotalItem';

type IListTask = {
  title: string;
  hoursKey: 'totalTasks' | 'totalHours' | 'totalDays';
};

const listTask: IListTask[] = [
  {
    title: 'Total Tasks',
    hoursKey: 'totalTasks'
  },
  {
    title: 'Total Hours',
    hoursKey: 'totalHours'
  },
  {
    title: 'Total Days',
    hoursKey: 'totalDays'
  }
];

const TotalInfo = () => {
  const tasks = useTasks();

  const taskTotalInfo = useMemo(() => {
    if (tasks.length === 0)
      return { totalTasks: 0, totalHours: 0, totalDays: 0 };

    const totalTasks = tasks.length;
    const totalHours = tasks.reduce((acc, task) => acc + Number(task.hours), 0);
    const totalDays = (totalHours / 8).toFixed(2);

    return {
      totalTasks,
      totalHours,
      totalDays
    };
  }, [tasks]);

  return (
    <div className='grid grid-cols-3 items-center gap-[20px]'>
      {listTask.map((task) => (
        <TotalItem
          key={task.title}
          title={task.title}
          value={taskTotalInfo[task.hoursKey]}
        />
      ))}
    </div>
  );
};

export default TotalInfo;
