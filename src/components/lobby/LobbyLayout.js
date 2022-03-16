import React from "react";
import { css } from "glamor";

const container = css({
  backgroundColor: "#A2A2FF",
});

export default function LobbyLayout(props) {
  return <div className={container}>{props.children}</div>;
}
