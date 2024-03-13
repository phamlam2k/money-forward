'use client';

import { useTasks } from '@/src/lib/common/providers/TaskMngt';
import { useMemo } from 'react';
import TotalItem from './TotalItem';
import { ITask } from '@/src/types/task.type';

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

const Dashboard = () => {
  const { tasks } = useTasks();

  const taskDashboard = useMemo(() => {
    if (typeof window !== 'undefined' && tasks && tasks.length === 0)
      return { totalTasks: 0, totalHours: 0, totalDays: 0 };

    const totalTasks = tasks.length;
    const totalHours = tasks.reduce(
      (acc: number, task: ITask) => acc + Number(task.hours),
      0
    );
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
          value={taskDashboard[task.hoursKey]}
        />
      ))}
    </div>
  );
};

export default Dashboard;
