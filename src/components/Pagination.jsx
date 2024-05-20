// import React from "react";

const Pagination = ({ allPages, postPerPage, currentPage, setCurrentPage }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(allPages / postPerPage); i++) {
    pages.push(i);
  }

  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="flex justify-center gap-5 mt-10">
      <button
        className="px-1 font-semibold text-white bg-gray-300 border rounded-sm dark:bg-gray-900 dark:border-gray-800"
        onClick={handlePrev}
      >
        Prev
      </button>
      {pages.map((page, index) => (
        <button
          key={index}
          className={`w-8 h-8 dark:text-white border border-gray-200 dark:border-gray-800 ${
            page === currentPage ? "bg-red-500 text-white font-semibold" : ""
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="px-1 font-semibold text-white bg-gray-300 border rounded-sm dark:bg-gray-900 dark:border-gray-800"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
