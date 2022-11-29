import React, { useContext, useEffect } from "react";
import FilterablePostsTableContext from "../FilterablePostsTable/FilterablePostsTable.context";

type SearchBarProps = {
  message: string;
};

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const { message } = props;

  const { searchValue, setSearchValue } = useContext(
    FilterablePostsTableContext
  );

  const componentName = "SearchBar";

  useEffect(() => {
    console.log(`${message} ${componentName}`);

    return () => {
      console.clear();
    };
  }, [message]);

  return (
    <form className="search-bar-form">
      <input
        type="text"
        className="search-bar-form-input"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
