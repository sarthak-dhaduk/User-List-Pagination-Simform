import React from "react";
import { v4 as uuidv4 } from "uuid";
const TableBodySkeleton = () => {
  //creating the empty array of row limit and iterating to show the shimmer ui
  const ROW_LIMIT: number = import.meta.env.VITE_APP_LIMIT;
  const arr = Array.from({ length: ROW_LIMIT });

  return (
    <>
      {arr.map((val, idx) => {
        const id = uuidv4();
        return (
          <tr key={id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
              <div className="flex items-center cursor-pointer">
                <div className="h-10 w-10 flex-shrink-0 animate-pulse rounded-full bg-gray-300"></div>
                <div className="ml-4 flex flex-col items-start">
                  <div className="font-medium text-gray-900 bg-gray-300 w-32 h-4 rounded-sm animate-pulse"></div>
                  <div className="text-gray-500 bg-gray-300 w-24 h-3 mt-1 rounded-sm animate-pulse"></div>
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
              <div className="rounded-full px-2 text-sm font-semibold text-left bg-gray-300 w-12 h-4 animate-pulse"></div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <div className="rounded-full px-2 text-sm font-semibold text-left bg-gray-300 w-12 h-4 animate-pulse"></div>
            </td>
            <td className="w-8 mx-8">
              <button>
                <div className="w-8 h-8 animate-pulse rounded-full bg-gray-300"></div>
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableBodySkeleton;
