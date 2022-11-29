import React from "react";
import { HashRouter as ReactRouter, Routes, Route } from "react-router-dom";
import { FilterablePostsTable, SinglePost } from "../../components";
import FilterablePostsTableProvider from "../../components/FilterablePostsTable/FilterablePostsTable.provider";

export const appUrls = {
  BASE: "/",
  ANY: "*",
  POSTS: "/posts",
  SINGLE_POST: "/posts/:postId",
};

export const Router: React.FC = (): JSX.Element => {
  return (
    <ReactRouter>
      <Routes>
        <Route path={appUrls.BASE} element={<FilterablePostsTable />} />
        <Route path={appUrls.ANY} element={<FilterablePostsTable />} />
        <Route path={appUrls.POSTS} element={<FilterablePostsTable />} />
        <Route
          path={appUrls.SINGLE_POST}
          element={
            <FilterablePostsTableProvider>
              <SinglePost />
            </FilterablePostsTableProvider>
          }
        />
      </Routes>
    </ReactRouter>
  );
};

export default Router;
