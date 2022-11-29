import React, { useEffect } from "react";
import {
  HashRouter as ReactRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { FilterablePostsTable, SinglePost } from "../../components";

export const appUrls = {
  BASE: "/",
  ANY: "**",
  POSTS: "/posts",
  SINGLE_POST: "/posts/:postId",
};

const ScrollToTop = (props: { children: React.ReactElement }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return <>{props.children}</>;
};

export const Router: React.FC = (): JSX.Element => {
  return (
    <ReactRouter>
      <ScrollToTop>
        <Routes>
          <Route path={appUrls.BASE} element={<FilterablePostsTable />} />
          <Route path={appUrls.ANY} element={<FilterablePostsTable />} />
          <Route path={appUrls.POSTS} element={<FilterablePostsTable />} />
          <Route path={appUrls.SINGLE_POST} element={<SinglePost />} />
        </Routes>
      </ScrollToTop>
    </ReactRouter>
  );
};

export default Router;
