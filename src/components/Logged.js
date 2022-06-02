import { css } from "glamor";
import React from "react";
import { colors } from "../lib/themeColors";

const container = css({
  minHeight: "100vh",
  width: "100vw",
  display: "flex",
  backgroundColor: colors.white,
});

export default function Logged(props) {
  return <div className={container}>{props.children}</div>;
}
