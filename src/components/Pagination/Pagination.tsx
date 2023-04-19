import React from "react";
import usePagination, { DOTS } from "../../hooks/usePagination";
import { v4 as uuidv4 } from "uuid";

type PaginationType = {
  page: number;
  totalPage: number;
  setPagesInTheTable: (page: number) => void;
};

const Pagination = ({
  page,
  totalPage,
  setPagesInTheTable,
}: PaginationType) => {
  const paginationRange = usePagination({
    currentPage: page,
    totalPageCount: totalPage,
  });

  const onNext = () => {
    setPagesInTheTable(page + 1);
  };
  const onPrevious = () => {
    setPagesInTheTable(page - 1);
  };

  //if page is 0 or range is 1 then return
  if (page === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }
  return (
    <div className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 mb-10">
      <div className="-mt-px w-0 flex-1 flex">
        <button
          className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          disabled={page === 1}
          onClick={onPrevious}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          Previous
        </button>
      </div>
      <div className="md:-mt-px md:flex">
        {paginationRange?.map(pageNumber => {
          const id = uuidv4();
          if (pageNumber === DOTS) {
            return (
              <button
                key={id}
                className="text-gray-500 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                ...
              </button>
            );
          }
          return (
            <button
              key={id}
              className={`border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium ${
                page === pageNumber
                  ? "border-darkYellow text-darkYellow "
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setPagesInTheTable(Number(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        <button
          className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          onClick={onNext}
          disabled={page === totalPage}
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
