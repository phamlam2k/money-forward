import { HTMLProps } from 'react';

export interface IDataTable {
  [key: string]: string | number;
}

export interface IColumnsProps {
  title: string;
  dataIndex: string;
  key: string;
  classNameCustom?: HTMLProps<HTMLElement>['className'];
  width?: string | number;
  textAlign?: 'left' | 'right' | 'center';
  render?: (record: IDataTable) => React.ReactNode | string;
}
