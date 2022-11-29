import React, { useEffect } from "react";

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

type CommentsListProps = {
  comments: Comment[];
  message: string;
};

const CommentsList: React.FC<CommentsListProps> = (
  props: CommentsListProps
) => {
  const { comments, message } = props;

  const componentName = "CommentList";

  useEffect(() => {
    console.log(`${message} ${componentName}`);

    return () => {
      console.clear();
    };
  }, [message]);

  return (
    <ul className="list-group">
      {comments.map((comment) => {
        return (
          <li key={comment.id} className="list-group-item">
            <h6>Comment: {comment.id}</h6>
            <p>{comment.body}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentsList;
