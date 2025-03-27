import { PaginationProps } from '@/interfaces';

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
  return (
    <nav
      className="flex items-center flex-wrap md:flex-row justify-between p-4"
      aria-label="Table navigation"
    >
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
        <li>
          <a
            onClick={() => onPageChange('prev')}
            className={`${page === 1 ? 'opacity-50' : 'cursor-pointer'} flex items-center justify-center px-3 h-8 ms-0 text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700`}
          >
            Anterior
          </a>
        </li>
        <li>
          <a className="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300">
            {page}
          </a>
        </li>
        <li>
          <a
            onClick={() => onPageChange('next')}
            className={`${page === totalPages ? 'opacity-50' : 'cursor-pointer'} flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"`}
          >
            Próximo
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
