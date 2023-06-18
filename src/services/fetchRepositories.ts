import { PAGE_SIZE } from "@/constants";

/**
 * Fetches repositories from the GitHub API based on a query string.
 * @param query The query string to search for
 * @param page The page number to fetch
 * @returns An array of repository items
 */
export const fetchRepositories = async ({
  query,
  page,
}: {
  query: string;
  page: number;
}) => {
  if (!query) return Promise.resolve([]); // Return an empty array if no query is provided
  const url = `https://api.github.com/search/repositories?q=${query}in:name&per_page=${PAGE_SIZE}&page=${page}&sort=stars&order=desc`;
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
