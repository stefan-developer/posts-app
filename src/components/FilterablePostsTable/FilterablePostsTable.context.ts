import React from "react";
import { Post } from "../SinglePost/SinglePost.component";
import { Comment } from "../CommentsList/CommentsList.component";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type FilterablePostsTableContextType = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  comments: Comment[];
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
  associatedPosts: Post[];
};

export default React.createContext<FilterablePostsTableContextType>({
  searchValue: "",
  setSearchValue: () => {},
  posts: [],
  setPosts: () => {},
  users: [],
  setUsers: () => {},
  comments: [],
  setComments: () => {},
  associatedPosts: [],
});
