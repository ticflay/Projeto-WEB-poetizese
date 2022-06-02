import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/App";
import PostsContainer from "../components/posts/PostsContainer";
import NotFound from "../components/NotFound";
import HomePageContainer from "../pages/home/HomePageContainer";
import PostCreationScreenContainer from "../pages/post/PostCreationScreenContainer";
import UserProfileContainer from "../pages/profile/UserProfileContainer";
import AccountConfigurationContainer from "../pages/configuration/accountConfiguration/AccountConfigurationContainer";

export default function AppRoutes() {
  return (
    <App>
      <BrowserRouter>
        <Routes>
          <Route path="/posts" element={<PostsContainer />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePageContainer />} exact />
          <Route path="/createPost" element={<PostCreationScreenContainer />} />
          <Route path="/userProfile" element={<UserProfileContainer />} />
          <Route
            path="/settings/account"
            element={<AccountConfigurationContainer />}
          />
        </Routes>
      </BrowserRouter>
    </App>
  );
}
