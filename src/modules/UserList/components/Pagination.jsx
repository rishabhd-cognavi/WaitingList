import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ dataPagination, setCurrentPage, currentPage }) {
  return (
    <div className="flex w-full justify-between border-t border-zinc-700/30 px-5 py-3 text-gray-500 dark:border-gray-700">
      <p className="">{`showing ${currentPage} to ${dataPagination.totalPages} out of ${dataPagination.totalResult} result`}</p>
      <div className="flex items-center divide-x divide-zinc-700/40 rounded-md border border-zinc-700/40 dark:divide-gray-700 dark:border-gray-700">
        <button
          className="px-3"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        >
          <ChevronLeft />
        </button>
        <button
          className="px-3"
          disabled={currentPage === dataPagination.totalPages}
          onClick={() =>
            setCurrentPage((p) => Math.min(dataPagination.totalPages, p + 1))
          }
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  dataPagination: PropTypes.shape({
    totalPages: PropTypes.number.isRequired,
    startIndex: PropTypes.number.isRequired,
    visibleUsers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        inviteCode: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        position: PropTypes.number.isRequired,
      }),
    ).isRequired,
    totalResult: PropTypes.number.isRequired,
  }).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export { Pagination };
