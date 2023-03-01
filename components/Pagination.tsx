import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

type Props = {
  totalPosts: number;
};

const Pagination = ({ totalPosts }: Props) => {
  const { query } = useRouter();

  const currentPage = query.pid ? Number(query.pid) : 1;
  const postsPerPage = Number(process.env.NEXT_PUBLIC_POSTS_PER_PAGE);
  const totalPages = Math.ceil(Number(totalPosts) / Number(postsPerPage));

  const start = currentPage === 1 ? 1 : postsPerPage * (currentPage - 1) + 1;
  const end =
    currentPage === totalPages ? totalPosts : start + postsPerPage - 1;

  return (
    <div className="flex items-center justify-between border bg-zinc-300 px-4 py-3 dark:border-zinc-900 dark:bg-zinc-800 sm:px-6">
      <div className="container">
        <div className="py-4 sm:hidden">
          <p className="text-sm text-black dark:text-white">
            Showing <span className="font-medium">{start}</span> to{" "}
            <span className="font-medium">{end}</span> of{" "}
            <span className="font-medium">{totalPosts}</span> results
          </p>
        </div>
        <div className="flex flex-1 justify-between sm:hidden">
          {currentPage !== 1 && (
            <Link href={`/blog/${currentPage - 1}`}>
              <a className="relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-zinc-300 dark:border-gray-300 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 dark:hover:text-white">
                Previous
              </a>
            </Link>
          )}
          {currentPage !== totalPages && (
            <Link href={`/blog/${currentPage + 1}`}>
              <a className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-zinc-300 dark:border-gray-300 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 dark:hover:text-white">
                Next
              </a>
            </Link>
          )}
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
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
              className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              {currentPage !== 1 && (
                <Link href={`/blog/${currentPage - 1}`}>
                  <a className="relative inline-flex items-center rounded-l-md border px-2 py-2 text-sm font-medium hover:bg-white hover:text-black dark:border-zinc-800 dark:bg-zinc-900 dark:text-gray-500 dark:hover:bg-zinc-800">
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
                            ? "relative z-10 inline-flex items-center border border-zinc-300 bg-red-800 px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-black dark:border-zinc-800 dark:bg-red-800 dark:text-white dark:hover:bg-red-900"
                            : "relative inline-flex items-center border px-4 py-2 text-sm font-medium text-black hover:bg-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-gray-500 dark:hover:bg-zinc-800"
                        }
                      >
                        {page}
                      </a>
                    </Link>
                  )
                )}
              {currentPage !== totalPages && (
                <Link href={`/blog/${currentPage + 1}`}>
                  <a className="relative inline-flex items-center rounded-r-md border px-2 py-2 text-sm font-medium hover:bg-white hover:text-black dark:border-zinc-800 dark:bg-zinc-900 dark:text-gray-500 dark:hover:bg-zinc-800">
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
