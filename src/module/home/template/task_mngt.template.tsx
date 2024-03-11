import { TaskMngtProvider } from '@/src/lib/common/providers/TaskMngt';
import TotalInfo from '../components/TotalInfo';
import FormAction from '../components/FormAction';
import CustomModal from '@/src/lib/common/modals/CustomModal';
import TableInfo from '../components/TableInfo';

const TaskMngtTemplate = () => {
  return (
    <TaskMngtProvider>
      <div className='p-[20px]'>
        <h1 className='text-[32px] font-semibold'>
          <span className='text-[#000]'>Task Management App</span>
        </h1>
        <TotalInfo />
        <FormAction />
        <TableInfo />
      </div>
    </TaskMngtProvider>
  );
};

export default TaskMngtTemplate;
