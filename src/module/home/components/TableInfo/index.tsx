'use client';

import BaseTable from '@/src/lib/common/base/tables/BaseTable';
import {
  TaskActionType,
  useTasks,
  useTasksDispatch
} from '@/src/lib/common/providers/TaskMngt';
import { IColumnsProps, IDataTable } from '@/src/types/table.type';
import { useState } from 'react';
import ConfirmDeleteModal from '../Modals/ConfirmDeleteModal';
import BaseInput from '@/src/lib/common/base/input/BaseInput';

const TableInfo = () => {
  const { tasksFilter, keyword } = useTasks();
  const dispatch = useTasksDispatch();

  const [idTask, setIdTask] = useState<string>('');

  const columns: IColumnsProps[] = [
    {
      key: 'title',
      title: 'Title',
      dataIndex: 'title',
      classNameCustom: 'flex-1',
      render: (row: IDataTable) => row.title
    },
    {
      key: 'hours',
      title: 'Hours',
      dataIndex: 'hours',
      width: 200,
      render: (row: IDataTable) => row.hours
    },
    {
      key: 'delete',
      title: 'Action',
      dataIndex: '',
      width: 200,
      render: (row: IDataTable) => (
        <div className='w-full'>
          <div className='w-fit' onClick={() => setIdTask(String(row.id))}>
            <p className='text-red-500'>
              <span className='underline'>Delete</span>
            </p>
          </div>
        </div>
      )
    }
  ];

  const handleDeleteModal = () => {
    if (!dispatch || idTask === '') return;

    dispatch({
      type: TaskActionType.Deleted,
      id: idTask
    });

    setIdTask('');
  };

  const handleCloseModal = () => {
    if (idTask !== '') {
      setIdTask('');
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!dispatch) return;

    dispatch({
      type: TaskActionType.Search,
      value
    });
  };

  return (
    <div className='mt-[50px]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-[18px] font-bold'>
          <span className='text-black'>Table Info</span>
        </h1>
        <div>
          <BaseInput
            value={keyword}
            placeholder='Search tasks'
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className='mt-[20px]'>
        <BaseTable columns={columns} dataTable={tasksFilter} />
      </div>

      <ConfirmDeleteModal
        isOpen={idTask !== ''}
        onClose={handleCloseModal}
        onDelete={handleDeleteModal}
      />
    </div>
  );
};

export default TableInfo;
