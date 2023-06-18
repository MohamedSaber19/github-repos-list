import { useEffect, useState } from "react";

import { IRepositoryItem } from "@/types";
import RepositoryItem from "../RepositoryItem";

const BookmarkedRepositories = () => {
  const [bookmarkedRepositories, setBookmarkedRepositories] = useState<
    IRepositoryItem[]
  >([]);

  const handleStorageChange = () => {
    const bookmarkedRepositories = JSON.parse(
      localStorage.getItem("bookmarkedRepos") || "[]"
    );
    setBookmarkedRepositories(bookmarkedRepositories);
  };

  useEffect(() => {
    handleStorageChange();
    // This is to trigger the useEffect when the bookmarkedRepos in localStorage is changed.
    window.addEventListener("storage", () => {
      handleStorageChange();
    });
  }, []);

  if (bookmarkedRepositories.length === 0) {
    return (
      <div className="p-8 lg:p-16 flex flex-col items-center justify-center h-full">
        <h1 className="text-lg lg:text-2xl font-bold mb-4">
          No Bookmarked Repositories Found
        </h1>
        <p className="text-gray-500">
          You have not bookmarked any repositories yet.
        </p>
      </div>
    );
  }
  return (
    <section className="container mx-auto py-4 md:py-8 lg:py-16">
      <h1 className="mx-auto text-lg lg:text-2xl text-center">
        Your bookmarked repositories
      </h1>
      <ul className="p-4 lg:p-8 auto-rows-fr grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {bookmarkedRepositories?.map((repo) => (
          <li key={repo.id}>
            <RepositoryItem {...repo} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BookmarkedRepositories;
