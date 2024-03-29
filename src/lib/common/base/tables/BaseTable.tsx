import { IColumnsProps } from '@/src/types/table.type';

type IBaseTableProps = {
  columns: IColumnsProps[];
  dataTable: any[];
};

const BaseTable = ({ columns, dataTable }: IBaseTableProps) => {
  return (
    <div className='w-full h-full flex flex-col'>
      <div className='w-full flex-1'>
        <table className='w-full table-collapse'>
          <thead>
            <tr>
              {columns.map((item) => (
                <th
                  key={item.dataIndex}
                  className={`truncate text-sm text-left font-semibold text-grey-darker p-3 bg-gray-200`}
                  style={{
                    width: item.width || 'auto'
                  }}
                >
                  {item.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='align-baseline'>
            {dataTable.length === 0 && (
              <tr>
                <td colSpan={columns.length} className='text-center p-3'>
                  No data
                </td>
              </tr>
            )}
            {dataTable.length > 0 &&
              dataTable.map((row, index) => (
                <tr
                  key={`row-dashboard-${index}`}
                  className='group cursor-pointer hover:bg-gray-100'
                >
                  {columns.map((item, index) => {
                    return (
                      <td
                        key={`${item}-${index}`}
                        className={`truncate text-sm p-3 border-t border-grey-light whitespace-no-wrap ${item.classNameCustom}`}
                      >
                        {item.render ? item.render(row) : row[item.key]}
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BaseTable;
