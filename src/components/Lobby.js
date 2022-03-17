import { css } from "glamor";
import React from "react";

const container = css({
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default function Lobby(props) {
  return <div className={container}>{props.children}</div>;
}
