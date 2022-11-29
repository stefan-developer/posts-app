import React, { useContext, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import CommentsList, { Comment } from "../CommentsList/CommentsList.component";
import FilterablePostsTableContext from "../FilterablePostsTable/FilterablePostsTable.context";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  userName?: string;
  comments?: Comment[];
};

type SinglePostProps = {
  message?: string;
  post?: Post;
  onSelect?: () => void;
};

const SinglePost: React.FC<SinglePostProps> = (props: SinglePostProps) => {
  const { post, onSelect, message } = props;

  const { postId } = useParams();

  const { associatedPosts } = useContext(FilterablePostsTableContext);

  const selectedPost = useMemo(() => {
    return (
      associatedPosts &&
      associatedPosts.filter((post) => post.id === +postId!)[0]
    );
  }, [associatedPosts, postId]);

  const componentName = "SinglePost";

  const renderPost = post || selectedPost;

  useEffect(() => {
    console.log(`${message || "Hello from"} ${componentName}`);

    return () => {
      console.clear();
    };
  }, [message]);

  return renderPost ? (
    <div className="single-post" onClick={onSelect && onSelect}>
      <li>
        <h5>Username: {renderPost?.userName}</h5>
        <p className="single-post-title">Post: {renderPost?.id}</p>
      </li>
      {renderPost?.comments && (
        <CommentsList
          comments={renderPost.comments}
          message={message || "Hello from"}
        />
      )}
    </div>
  ) : (
    <p>There is no available data..</p>
  );
};

export default SinglePost;
