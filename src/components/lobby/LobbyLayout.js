import React from "react";
import { css } from "glamor";
import { colors } from "../../lib/themeColors";
import NavbarLobby from "../Navbar/lobby/NavbarLobby";

const container = css({
  backgroundColor: colors.purple,
  width: "100vw",
  display: "flex",
  flexDirection: "column",
});

export default function LobbyLayout(props) {
  return (
    <div style={props.style} className={container}>
      <NavbarLobby style={props.navStyle} />
      {props.children}
    </div>
  );
}
