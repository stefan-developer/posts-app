import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Router from "./modules/router/Router";
import FilterablePostsTableProvider from "./components/FilterablePostsTable/FilterablePostsTable.provider";

function App() {
  return (
    <FilterablePostsTableProvider>
      <Router />
    </FilterablePostsTableProvider>
  );
}

export default App;
