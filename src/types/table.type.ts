import { HTMLProps } from 'react';

export interface IDataTable {
  [key: string]: string | number;
}

export interface IColumnsProps {
  title: string;
  dataIndex: string;
  key: string;
  classNameCustom?: HTMLProps<HTMLElement>['className'];
  render?: (record: IDataTable) => React.ReactNode | string;
}
