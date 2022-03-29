import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lobby from "../components/Lobby";
import SignInFormContainer from "../components/signIn/SignInFormContainer";
import SignUpFormContainer from "../components/signUp/SignUpFormContainer";
import AboutUsPage from "../components/AboutUs/AboutUsPage";
import Literatura from "../components/Literatura/Literatura";

export default function LobbyRoutes() {
  return (
    <Lobby>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpFormContainer />} exact />
          <Route path="/*" element={<SignInFormContainer />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/literatura" element={<Literatura />} />
        </Routes>
      </BrowserRouter>
    </Lobby>
  );
}
