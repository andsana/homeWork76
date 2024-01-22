export interface Post {
  id: string;
  author: string;
  message: string;
  datetime: string;
}

export interface PostMutation {
  author: string;
  message: string;
}
