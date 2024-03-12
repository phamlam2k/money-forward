import { TaskMngtProvider } from '@/src/lib/common/providers/TaskMngt';
import TotalInfo from '../components/TotalInfo';
import FormAction from '../components/FormAction';
import TableInfo from '../components/TableInfo';

const TaskMngtTemplate = () => {
  return (
    <TaskMngtProvider>
      <div className='p-[20px]'>
        <h1 className='text-[32px] font-semibold mb-[20px]'>
          <span className='text-[#000]'>Task Management App</span>
        </h1>
        <TotalInfo />

        <div className='p-[20px] shadow-xl rounded-md mt-[30px] w-fit'>
          <h1 className='text-[22px] font-semibold'>
            <span className='text-[#000]'>Add task</span>
          </h1>
          <FormAction />
        </div>
        <TableInfo />
      </div>
    </TaskMngtProvider>
  );
};

export default TaskMngtTemplate;
