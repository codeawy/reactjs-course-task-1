import React from "react";
import PostItem from "./components/PostItem/PostItem";
import postList from "./lists";

import "./App.css";

const App = () => {
  const renderPostList = postList.map((post, idx) => <PostItem key={idx} {...post} />);
  return (
    <div>
      <div className="posts-wrapper">{renderPostList}</div>
    </div>
  );
};

export default App;
