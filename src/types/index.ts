export interface IRepositoryItem {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}
