import { Pagination } from '@/components';
import { TableProps } from '@/interfaces';
import { formatDate } from '@/utils';

const Table = ({ mainPage = true, headList = [], data = [] }: TableProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-base text-gray-700 bg-gray-50">
          <tr>
            {headList.map((header) => {
              return (
                <th scope="col" className="px-6 py-3">
                  {header}:
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr
                key={item.id}
                className="bg-white border-b  border-gray-200 hover:bg-gray-50 hover:bg-gray-200 hover:text-gray-900 hover:border-gray-300"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.region}</td>
                <td className="px-6 py-4">{item.iqar}</td>
                <td className="px-6 py-4">{item.iqar}</td>
                <td className="px-6 py-4">{item.source}</td>
                <td className="px-6 py-4">{formatDate(item.createdAt)}</td>
                <td className="px-6 py-4">{item.recommendations}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {!mainPage && <Pagination />}
    </div>
  );
};

export default Table;
