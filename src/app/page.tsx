import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Task Management',
  description: 'Manage task for employeers'
};

const TaskMngtTemplate = dynamic(
  () => import('../module/home/template/task_mngt.template'),
  {
    ssr: false
  }
);

export default function Home() {
  return <TaskMngtTemplate />;
}
