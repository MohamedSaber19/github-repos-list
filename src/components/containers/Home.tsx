import { useEffect, useState } from "react";
import { fetchRepositories } from "../../services/fetchRepositories";
import { IRepositoryItem } from "../../types";
import RepositoryList from "../RepositoryList";
import SearchInput from "../SearchInput";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [repositories, setRepositories] = useState<IRepositoryItem[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (!searchQuery.trim()) {
      setRepositories([]);
      setTotalCount(0);
      return;
    }
    setLoading(true);
    fetchRepositories({ query: searchQuery, page })
      .then((response) => {
        if (response.items) {
          setRepositories(response.items);
          setTotalCount(response.total_count);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
      });
  }, [searchQuery, page]);

  const handlePageClick = (data: { selected: number }) => {
    setPage(data.selected + 1);
  };

  return (
    <section className="flex flex-col p-4 md:p-8 lg:p-16 h-full">
      <div className="mb-4 flex justify-center">
        <SearchInput onSearch={handleSearch} />
      </div>
      <RepositoryList
        repositories={repositories}
        totalCount={totalCount}
        onPageClick={handlePageClick}
        loading={loading}
        error={error}
        searchQuery={searchQuery}
      />
    </section>
  );
};

export default Home;
