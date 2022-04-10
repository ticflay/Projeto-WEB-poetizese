import { css } from "glamor";
import React from "react";
import { colors } from "../lib/themeColors";

const container = css({
  minHeight: "100vh",
  width: "100vw",
  display: "flex",
  backgroundColor: colors.purple,
});

export default function Lobby(props) {
  return <div className={container}>{props.children}</div>;
}
