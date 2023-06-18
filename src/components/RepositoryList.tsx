import ReactPaginate from "react-paginate";
import { PAGE_SIZE } from "../constants";
import { IRepositoryItem } from "../types";
import RepositoryItem from "./RepositoryItem";
import Skeleton from "./Skeleton";

type Props = {
  repositories: IRepositoryItem[];
  totalCount: number;
  onPageClick: (data: { selected: number }) => void;
  loading: boolean;
  error: string;
  searchQuery: string;
};

const RepositoryList = ({
  repositories,
  totalCount,
  onPageClick,
  loading,
  error,
  searchQuery,
}: Props) => {
  const handlePageClick = async (data: { selected: number }) => {
    // scroll to top.
    window.scrollTo(0, 0);
    onPageClick(data);
  };

  const handlePageCount = () => {
    const count = Math.ceil(totalCount / PAGE_SIZE);
    if (count > 100) {
      //GitHub API only returns up to 1000 results.
      return 100;
    }
    return count;
  };

  const handleRenderData = () => {
    if (loading) {
      return (
        <ul className="py-4 lg:py-8 auto-rows-fr grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(10)].map((_, index) => (
            <li key={index}>
              <Skeleton />
            </li>
          ))}
        </ul>
      );
    }
    if (searchQuery && repositories.length === 0) {
      return (
        <div className="text-center p-4">
          No repositories found with that name.
        </div>
      );
    }
    return (
      <ul className="py-4 lg:py-8 auto-rows-fr grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {repositories?.map((repo) => (
          <li key={repo.id}>
            <RepositoryItem {...repo} />
          </li>
        ))}
      </ul>
    );
  };

  if (error) {
    return <div className="text-center p-8 lg:p-16 text-red-400">{error}</div>;
  }

  return (
    <div className="h-full container mx-auto">
      {handleRenderData()}
      {totalCount > PAGE_SIZE && (
        <ReactPaginate
          previousLabel={"< Prev"}
          nextLabel={"Next >"}
          breakLabel={"..."}
          breakClassName={"flex items-center justify-center w-10 h-10 m-6"}
          pageCount={handlePageCount()}
          onPageChange={handlePageClick}
          containerClassName={
            "pagination mt-8 lg:mt-16 flex flex-wrap justify-center items-center"
          }
          activeClassName={"bg-white text-black"}
          pageClassName="flex justify-center items-center  cursor-pointer hover:bg-white hover:text-black m-6 bg-accent-2"
          pageLinkClassName="p-4"
          previousClassName="bg-accent-2 py-2 px-4 m-3  justify-center items-center flex cursor-pointer hover:text-primary text-sm"
          nextClassName="bg-accent-2 py-2 px-4 m-3 justify-center items-center flex cursor-pointer hover:text-primary text-sm"
        />
      )}
    </div>
  );
};

export default RepositoryList;
