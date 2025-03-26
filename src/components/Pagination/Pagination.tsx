import { PaginationProps } from '@/interfaces';

const Pagination = ({ page, onPageChange }: PaginationProps) => {
  return (
    <nav
      className="flex items-center flex-wrap md:flex-row justify-between p-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500  mb-4 md:mb-0 block w-full md:inline md:w-auto">
        {/* Showing <span className="font-semibold text-gray-900">1-10</span> of{' '}
        <span className="font-semibold text-gray-900">1000</span> */}
      </span>
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
        <li>
          <a
            onClick={() => onPageChange('prev')}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Anterior
          </a>
        </li>
        <li>
          <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
            {page}
          </a>
        </li>
        <li>
          <a
            onClick={() => onPageChange('next')}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Próximo
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
