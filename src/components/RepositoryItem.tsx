import { IRepositoryItem } from "@/types";
import { useRef } from "react";

const RepositoryItem = ({
  id,
  name,
  description,
  stargazers_count,
  html_url,
  owner,
}: IRepositoryItem) => {
  const bookmarkIconRef = useRef<SVGSVGElement>(null);

  const handleBookmarkRepo = () => {
    const bookmarkedRepos = localStorage.getItem("bookmarkedRepos");
    if (bookmarkedRepos) {
      // If bookmarkedRepos exist in localStorage, check if the repo is already bookmarked.
      const parsedRepos = JSON.parse(bookmarkedRepos);
      const isRepoExist = parsedRepos.find(
        (repo: IRepositoryItem) => repo.id === id
      );
      if (isRepoExist) {
        // If repo is already bookmarked, remove it from localStorage.
        const newRepos = parsedRepos.filter(
          (repo: IRepositoryItem) => repo.id !== id
        );
        localStorage.setItem("bookmarkedRepos", JSON.stringify(newRepos));
        window.dispatchEvent(new Event("storage")); // This is to trigger the useEffect in BookmarkedRepositories.tsx
        bookmarkIconRef.current?.classList.remove("fill-yellow-500");
        return;
      }
      // If repo is not bookmarked, add it to localStorage.
      const newRepos = [
        ...parsedRepos,
        { id, name, description, stargazers_count, html_url, owner },
      ];
      localStorage.setItem("bookmarkedRepos", JSON.stringify(newRepos));
      bookmarkIconRef.current?.classList.add("fill-yellow-500");
      return;
    }
    // If bookmarkedRepos does not exist in localStorage, add the repo to localStorage.
    const newRepos = [
      { id, name, description, stargazers_count, html_url, owner },
    ];
    localStorage.setItem("bookmarkedRepos", JSON.stringify(newRepos));
    bookmarkIconRef.current?.classList.add("fill-yellow-500");
  };

  const isRepoBookmarked = () => {
    const bookmarkedRepos = localStorage.getItem("bookmarkedRepos");
    if (bookmarkedRepos) {
      const parsedRepos = JSON.parse(bookmarkedRepos);
      const isRepoExist = parsedRepos.find(
        (repo: IRepositoryItem) => repo.id === id
      );
      if (isRepoExist) {
        return "fill-yellow-500";
      }
    }
    return "";
  };

  return (
    <article className="h-full flex flex-col p-4 border border-gray-200 rounded-md shadow-md bg-gray-200">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full"
            src={owner.avatar_url}
            alt={owner.login}
          />
          <h2 className="ml-2 text-sm font-medium text-black">{owner.login}</h2>
        </div>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 0L7.76 6.64L0 7.64L6.18 12.38L4.82 20L10 15.58L15.18 20L13.82 12.38L20 7.64L12.24 6.64L10 0Z"
            />
          </svg>
          <span className="ml-1 text-sm font-medium text-black">
            {stargazers_count}
          </span>
          <button
            type="button"
            title="Bookmark Repository"
            onClick={handleBookmarkRepo}
          >
            <svg
              ref={bookmarkIconRef}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ml-2 lg:ml-4 text-gray-500 ${isRepoBookmarked()}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-2">
        <a
          className="text-lg font-medium text-purple-700 hover:underline"
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </article>
  );
};

export default RepositoryItem;
