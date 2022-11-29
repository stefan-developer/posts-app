import React, { useContext, useEffect, useMemo } from "react";
import FilterablePostsTableContext from "../FilterablePostsTable/FilterablePostsTable.context";
import SinglePost from "../SinglePost/SinglePost.component";
import { useNavigate } from "react-router-dom";
import { appUrls } from "../../modules/router/Router";

export type PostsListProps = {
  message: string;
};

const PostsList: React.FC<PostsListProps> = (props: PostsListProps) => {
  const { message } = props;

  const { searchValue, associatedPosts } = useContext(
    FilterablePostsTableContext
  );

  const navigate = useNavigate();

  const componentName = "PostsList";

  const filteredPosts = useMemo(() => {
    return associatedPosts.filter((p) =>
      p.userName?.toLowerCase()?.includes(searchValue?.toLocaleLowerCase())
    );
  }, [associatedPosts, searchValue]);

  useEffect(() => {
    console.log(`${message} ${componentName}`);

    return () => {
      console.clear();
    };
  }, [message]);

  return filteredPosts.length ? (
    <ul className="posts">
      {filteredPosts.map((post, index) => {
        return (
          <SinglePost
            key={`${post.id}_${index}`}
            post={post}
            message={message}
            onSelect={() =>
              navigate(
                appUrls.SINGLE_POST.replace(":postId", post.id.toString())
              )
            }
          />
        );
      })}
    </ul>
  ) : (
    <p>There are no posts for searched text.. </p>
  );
};

export default PostsList;
