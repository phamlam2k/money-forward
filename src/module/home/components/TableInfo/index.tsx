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

const TableInfo = () => {
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  const [idTask, setIdTask] = useState<string>('');

  const columns: IColumnsProps[] = [
    {
      key: 'title',
      title: 'Title',
      dataIndex: 'title',
      classNameCustom: '',
      render: (row: IDataTable) => row.title
    },
    {
      key: 'hours',
      title: 'Hours',
      dataIndex: 'hours',
      classNameCustom: 'w-[200px]',
      render: (row: IDataTable) => row.hours
    },
    {
      key: 'delete',
      title: 'Action',
      dataIndex: '',
      width: 100,
      render: (row: IDataTable) => (
        <div onClick={() => setIdTask(String(row.id))}>
          <p className='text-red-500'>
            <span className='underline'>Delete</span>
          </p>
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
    if (idTask === '') {
      setIdTask('');
    }
  };

  return (
    <div className='mt-[50px]'>
      <h1 className='text-[18px] font-bold'>
        <span className='text-black'>Table Info</span>
      </h1>
      <div className='mt-[20px]'>
        <BaseTable columns={columns} dataTable={tasks} />
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
