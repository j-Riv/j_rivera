import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

interface Props {
  totalPosts: number;
}

const Pagination: React.FC<Props> = ({ totalPosts }) => {
  const { query } = useRouter();

  const currentPage = query.pid ? Number(query.pid) : 1;
  const postsPerPage = Number(process.env.NEXT_PUBLIC_POSTS_PER_PAGE);
  const totalPages = Math.ceil(Number(totalPosts) / Number(postsPerPage));

  const start = currentPage === 1 ? 1 : postsPerPage * (currentPage - 1) + 1;
  const end =
    currentPage === totalPages ? totalPosts : start + postsPerPage - 1;

  return (
    <div className="bg-zinc-300 dark:bg-zinc-800 px-4 py-3 flex items-center justify-between border dark:border-zinc-900 sm:px-6">
      <div className="container">
        <div className="sm:hidden py-4">
          <p className="text-sm text-black dark:text-white">
            Showing <span className="font-medium">{start}</span> to{" "}
            <span className="font-medium">{end}</span> of{" "}
            <span className="font-medium">{totalPosts}</span> results
          </p>
        </div>
        <div className="flex-1 flex justify-between sm:hidden">
          {currentPage !== 1 && (
            <Link href={`/blog/${currentPage - 1}`}>
              <a className="relative inline-flex items-center px-4 py-2 border border-gray-300 hover:bg-zinc-300 dark:border-gray-300 text-sm font-medium rounded-md dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:hover:text-white">
                Previous
              </a>
            </Link>
          )}
          {currentPage !== totalPages && (
            <Link href={`/blog/${currentPage + 1}`}>
              <a className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 hover:bg-zinc-300 dark:border-gray-300 text-sm font-medium rounded-md dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:hover:text-white">
                Next
              </a>
            </Link>
          )}
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-black dark:text-white">
              Showing{" "}
              <span className="font-medium">
                {totalPosts > 0 ? start : "0"}
              </span>{" "}
              to{" "}
              <span className="font-medium">{totalPosts > 0 ? end : "0"}</span>{" "}
              of <span className="font-medium">{totalPosts}</span> results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              {currentPage !== 1 && (
                <Link href={`/blog/${currentPage - 1}`}>
                  <a className="relative inline-flex items-center px-2 py-2 rounded-l-md hover:bg-white hover:text-black dark:bg-zinc-900 dark:border-zinc-800 border text-sm font-medium dark:text-gray-500 dark:hover:bg-zinc-800">
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </Link>
              )}

              {totalPages > 1 &&
                Array.from({ length: totalPages }, (v, i) => i + 1).map(
                  (page: number) => (
                    <Link key={page} href={`/blog/${page}`}>
                      <a
                        aria-current={currentPage === page ? true : false}
                        className={
                          currentPage === page
                            ? "z-10 bg-red-800 border-zinc-300 text-white hover:bg-white hover:text-black dark:bg-red-800 dark:border-zinc-800 dark:text-white dark:hover:bg-red-900 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            : "text-black hover:bg-white dark:bg-zinc-900 dark:border-zinc-800 dark:text-gray-500 dark:hover:bg-zinc-800 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        }
                      >
                        {page}
                      </a>
                    </Link>
                  )
                )}
              {currentPage !== totalPages && (
                <Link href={`/blog/${currentPage + 1}`}>
                  <a className="relative inline-flex items-center px-2 py-2 rounded-r-md hover:bg-white hover:text-black dark:bg-zinc-900 dark:border-zinc-800 border text-sm font-medium dark:text-gray-500 dark:hover:bg-zinc-800">
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
