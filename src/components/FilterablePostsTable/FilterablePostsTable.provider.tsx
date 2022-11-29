import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { Post } from "../SinglePost/SinglePost.component";
import { Comment } from "../CommentsList/CommentsList.component";
import FilterablePostsTableContext, {
  FilterablePostsTableContextType,
  User,
} from "./FilterablePostsTable.context";

type FilterablePostsTableProviderProps = {
  children: React.ReactNode;
};

const FilterablePostsTableProvider: React.ForwardRefRenderFunction<
  FilterablePostsTableContextType,
  FilterablePostsTableProviderProps
> = ({ children }, ref) => {
  const [searchValue, setSearchValue] = useState("");

  const [posts, setPosts] = useState<Post[]>([]);

  const [users, setUsers] = useState<User[]>([]);

  const [comments, setComments] = useState<Comment[]>([]);

  const getPosts = useCallback(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  const getUsers = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  const getComments = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((response) => response.json())
      .then((comments) => setComments(comments));
  }, []);

  useEffect(() => {
    getPosts();
    getUsers();
    getComments();
  }, [getPosts, getComments, getUsers]);

  const associatedPosts = useMemo<Post[]>(() => {
    let newPosts: Post[] = [];
    posts.forEach((post) => {
      const connectedComments = comments.filter((c) => c.postId === post.id);
      return users.forEach((user) => {
        if (post.userId === user.id) {
          const newObj = {
            ...post,
            userName: user.username,
            comments: connectedComments,
          };
          newPosts.push(newObj);
        }
      });
    });
    return newPosts;
  }, [posts, users, comments]);

  useImperativeHandle(
    ref,
    () => ({
      searchValue,
      setSearchValue,
      posts,
      setPosts,
      users,
      setUsers,
      comments,
      setComments,
      associatedPosts,
    }),
    [
      searchValue,
      setSearchValue,
      posts,
      setPosts,
      users,
      setUsers,
      comments,
      setComments,
      associatedPosts,
    ]
  );

  return (
    <FilterablePostsTableContext.Provider
      value={{
        searchValue,
        setSearchValue,
        posts,
        setPosts,
        users,
        setUsers,
        comments,
        setComments,
        associatedPosts,
      }}
    >
      {children}
    </FilterablePostsTableContext.Provider>
  );
};

export default forwardRef(FilterablePostsTableProvider);
