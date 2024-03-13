import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Loading } from './loading';

export const metadata: Metadata = {
  title: 'Task Management',
  description: 'Manage task for employeers'
};

const TaskMngtTemplate = dynamic(
  () => import('../module/home/template/task_mngt.template'),
  {
    ssr: false,
    loading: () => <Loading />
  }
);

export default function Home() {
  return <TaskMngtTemplate />;
}
