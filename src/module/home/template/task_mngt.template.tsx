import { TaskMngtProvider } from '@/src/lib/common/providers/TaskMngt';
import TotalInfo from '../components/TotalInfo';

const TaskMngtTemplate = () => {
  return (
    <TaskMngtProvider>
      <div className='p-[20px]'>
        <h1 className='text-[32px] font-semibold'>
          <span className='text-[#000]'>Task Management App</span>
        </h1>
        <TotalInfo />
      </div>
    </TaskMngtProvider>
  );
};

export default TaskMngtTemplate;
