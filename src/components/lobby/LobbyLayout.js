import React from "react";
import { css } from "glamor";
import { colors } from "../../lib/themeColors";
import NavbarLobby from "../Navbar/NavbarLobby";

const container = css({
  backgroundColor: colors.purple,
  width: "100vw",
  display: "flex",
  flexDirection: "column",
});

export default function LobbyLayout(props) {
  return (
    <div className={container}>
      <NavbarLobby />
      {props.children}
    </div>
  );
}
