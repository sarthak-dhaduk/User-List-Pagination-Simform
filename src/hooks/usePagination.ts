import { useMemo } from "react";

type PaginationArg = {
  totalPageCount: number;
  siblingCount?: number;
  currentPage: number;
};
export const DOTS = "...";

const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const usePagination = ({
  totalPageCount,
  currentPage,
  siblingCount = 1,
}: PaginationArg) => {
  const paginationRange = useMemo(() => {
    //if below the default limit then show all the number
    if (totalPageCount <= 7) {
      return range(1, totalPageCount);
    }

    //last index is total page count
    const lastPageIndex = totalPageCount;

    //checking left and right sibling is near to end or near to start
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    //deciding to display the dots or not
    const leftDotsShow = leftSiblingIndex > 2;
    const rightDotsShow = rightSiblingIndex < totalPageCount - 2;

    //returning the array with conditions
    if (!leftDotsShow && rightDotsShow) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }

    if (leftDotsShow && rightDotsShow) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [1, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    if (leftDotsShow && !rightDotsShow) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [1, DOTS, ...rightRange];
    }
  }, [totalPageCount, siblingCount, currentPage]);

  return paginationRange;
};

export default usePagination;
