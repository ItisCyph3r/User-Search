export interface GitHubUser {
  avatar_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number; 
  followers: number;
  html_url: string;
  login: string;
}
