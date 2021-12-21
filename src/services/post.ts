import api from './api';

export interface GetPostsOptions {
  page?: number;
}

export interface GetPostsResponse {
  current_page: number;
  data: GetPostResponse[];
  first_page_url: string;
  from: number;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
}

export const getPosts = ({ page }: GetPostsOptions = {}) => {
  return api.get<GetPostsResponse>(`/posts?page=${page}`);
};

export interface GetPostResponse {
  id: number;
  title: string;
  slug: string;
  body: string;
  created_at: string;
  updated_at: string;
}

export const getPost = (slug: string) => {
  return api.get<GetPostResponse>(`/posts/${slug}`);
};
