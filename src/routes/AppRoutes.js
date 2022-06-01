import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/App";
import PostsContainer from "../components/posts/PostsContainer";
import NotFound from "../components/NotFound";
import HomePageContainer from "../pages/HomePageContainer";

export default function AppRoutes() {
  return (
    <App>
      <BrowserRouter>
        <Routes>
          <Route path="/posts" element={<PostsContainer />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePageContainer />} exact />
        </Routes>
      </BrowserRouter>
    </App>
  );
}
