import React from "react";
import PostsList from "../PostsList/PostsList.component";
import SearchBar from "../SearchBar/SearchBar.component";
import FilterablePostsTableProvider from "./FilterablePostsTable.provider";

const FilterablePostsTable: React.FC = () => {
  const message = "Hello from";

  return (
    <FilterablePostsTableProvider>
      <div className="filterable-table-posts">
        <SearchBar message={message} />
        <PostsList message={message} />
      </div>
    </FilterablePostsTableProvider>
  );
};

export default FilterablePostsTable;
