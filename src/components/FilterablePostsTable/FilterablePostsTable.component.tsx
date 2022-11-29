import React from "react";
import PostsList from "../PostsList/PostsList.component";
import SearchBar from "../SearchBar/SearchBar.component";

const FilterablePostsTable: React.FC = () => {
  const message = "Hello from";

  return (
    <div className="filterable-table-posts">
      <SearchBar message={message} />
      <PostsList message={message} />
    </div>
  );
};

export default FilterablePostsTable;
