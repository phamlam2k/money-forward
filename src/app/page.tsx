import { Metadata } from 'next';
import TaskMngtTemplate from '../module/home/template/task_mngt.template';

export const metadata: Metadata = {
  title: 'Task Management',
  description: 'Manage task for employeers'
};

export default function Home() {
  return <TaskMngtTemplate />;
}
