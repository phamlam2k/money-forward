'use client';

import BaseTable from '@/src/lib/common/base/tables/BaseTable';
import { useTasks } from '@/src/lib/common/providers/TaskMngt';
import { IColumnsProps, IDataTable } from '@/src/types/table.type';

const TableInfo = () => {
  const tasks = useTasks();

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
      classNameCustom: '',
      render: (row: IDataTable) => row.title
    },
    {
      key: 'delete',
      title: 'Action',
      dataIndex: '',
      classNameCustom: '',
      render: (row: IDataTable) => (
        <div onClick={() => console.log(row)}>
          <p>
            <span>Delete</span>
          </p>
        </div>
      )
    }
  ];

  return (
    <div className='mt-[50px]'>
      <h1 className='text-[18px] font-bold'>
        <span className='text-black'>Table Info</span>
      </h1>
      <div className='mt-[20px]'>
        <BaseTable columns={columns} dataTable={tasks} />
      </div>
    </div>
  );
};

export default TableInfo;
