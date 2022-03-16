import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lobby from "../components/Lobby";
import SignInFormContainer from "../components/signIn/SignInFormContainer";
import SignUpFormContainer from "../components/signUp/SignUpFormContainer";

export default function LobbyRoutes() {
  return (
    <Lobby>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpFormContainer />} exact />
          <Route path="/*" element={<SignInFormContainer />} />
        </Routes>
      </BrowserRouter>
    </Lobby>
  );
}
