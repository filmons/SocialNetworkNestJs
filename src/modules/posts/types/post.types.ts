export type Post = {
  id: number;
  post_date: Date;
  post_author: number;
  post_title: string;
  post_content: string;
  post_status: string;
  comments: string;
  likedBy: string;
  mediaSrc: string;
  post_modified: Date;
  post_type: string;
};