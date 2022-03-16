import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/App";
import PostsContainer from "../components/posts/PostsContainer";
import NotFound from "../components/NotFound";

export default function AppRoutes() {
  return (
    <App>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostsContainer />} exact />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </App>
  );
}
