import { useMemo } from 'react';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { nanoid } from '@reduxjs/toolkit';

export default function Pagination({ totalPages, pageIndex, onPageChange }) {
  const breakpoint = useBreakpoint();
  const maxPageButtons = useMemo(() => getMaxPageButtonsFromBreakpoint(breakpoint), [breakpoint]);
  const hasNextPage = pageIndex < totalPages - 1;
  const hasPreviousPage = pageIndex > 0;

  return (
    <div className={'flex flex-row items-center gap-6'}>
      <button disabled={!hasPreviousPage} className={'cursor-pointer px-2'} onClick={() => onPageChange(pageIndex - 1)}>
        {/* Left arrow icon */}
        <svg
          className={hasPreviousPage ? 'text-black' : 'text-gray-500'}
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.06015 15.5601C9.34105 15.2788 9.49883 14.8976 9.49883 14.5001C9.49883 14.1026 9.34105 13.7214 9.06015 13.4401L3.62014 8.0001L9.06015 2.5601C9.32511 2.27575 9.46935 1.89966 9.4625 1.51106C9.45564 1.12245 9.29822 0.751682 9.02339 0.476856C8.74856 0.20203 8.37779 0.0446044 7.98919 0.0377484C7.60059 0.0308925 7.22449 0.17514 6.94014 0.4401L0.440145 6.9401C0.159244 7.22135 0.00146494 7.6026 0.00146494 8.0001C0.00146493 8.3976 0.159244 8.77885 0.440145 9.0601L6.94014 15.5601C7.2214 15.841 7.60264 15.9988 8.00014 15.9988C8.39765 15.9988 8.77889 15.841 9.06015 15.5601Z"
            fill="currentColor"
          />
        </svg>
      </button>
      {getPageButtons(pageIndex, totalPages, maxPageButtons).map(toPageIndex => {
        return (
          <button key={toPageIndex} className={'px-2 cursor-pointer hover:underline'} onClick={() => onPageChange(toPageIndex)}>
            <p className={`text-lg font-semibold ${toPageIndex === pageIndex ? 'text-gray-500' : 'text-black'}`}>
              {toPageIndex + 1}
            </p>
          </button>
        );
      })}
      <button disabled={!hasNextPage} className={'cursor-pointer px-2'} onClick={() => onPageChange(pageIndex + 1)}>
        {/* Right arrow icon */}
        <svg
          className={hasNextPage ? 'text-black' : 'text-gray-500'}
          color="#141414"
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.940007 0.4399C0.659106 0.721151 0.501327 1.1024 0.501327 1.4999C0.501327 1.8974 0.659106 2.27865 0.940007 2.5599L6.38001 7.9999L0.940007 13.4399C0.675046 13.7243 0.530801 14.1003 0.537657 14.4889C0.544513 14.8775 0.701937 15.2483 0.976763 15.5231C1.25159 15.798 1.62236 15.9554 2.01096 15.9623C2.39956 15.9691 2.77566 15.8249 3.06001 15.5599L9.56001 9.0599C9.84091 8.77865 9.99869 8.3974 9.99869 7.9999C9.99869 7.6024 9.84091 7.22115 9.56001 6.9399L3.06001 0.439901C2.77876 0.159 2.39751 0.00122037 2.00001 0.00122035C1.60251 0.00122034 1.22126 0.159 0.940007 0.4399Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}

function getPageButtons(pageIndex, totalPages, maxPageButtons) {
  let pageButtons = [];
  for (let i = pageIndex; i < totalPages && pageButtons.length < maxPageButtons; i++) {
    pageButtons.push(i);
  }
  if (pageButtons.length < maxPageButtons && pageIndex > 0) {
    for (let i = pageIndex - 1; i >= 0 && pageButtons.length < maxPageButtons; i--) {
      pageButtons.unshift(i);
    }
  }
  return pageButtons;
}

function getMaxPageButtonsFromBreakpoint(breakpoint) {
  if (breakpoint === 'xs') {
    return 3;
  } else if (breakpoint === 'sm' || breakpoint === 'md') {
    return 5;
  } else {
    return 10;
  }
}
