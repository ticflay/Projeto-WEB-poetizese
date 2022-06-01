import React from "react";
import { css } from "glamor";
import { colors } from "../../lib/themeColors";
import SidebarContainer from "../Sidebar/SideBarContainer";

const container = css({
  backgroundColor: colors.white,
  width: "100vw",
  height: "100%",
  display: "flex",
  flexDirection: "row",
});

export default function LoggedLayout(props) {
  return (
    <div style={props.style} className={container}>
      <SidebarContainer />
      {props.children}
    </div>
  );
}
