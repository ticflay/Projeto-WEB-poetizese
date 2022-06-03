import React, { useState } from "react";
import { css } from "glamor";
import { colors } from "../../lib/themeColors";
import SidebarContainer from "../Sidebar/SideBarContainer";
import NavbarLoggedContainer from "../Navbar/logged/NavbarLoggedContainer";

const container = css({
  backgroundColor: colors.white,
  width: "100vw",
  display: "flex",
  flexDirection: "column",
});

export default function LoggedLayout(props) {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const handleToogle = () => {
    setSideBarCollapsed((prev) => !prev);
  };

  const closeSidebar = () => {
    setSideBarCollapsed((prev) => false);
  };

  return (
    <div style={props.style} className={`${container}`}>
      <NavbarLoggedContainer
        closeSidebar={closeSidebar}
        handleToogle={handleToogle}
        className="bg-myColors-sideNavBar w-full"
      />
      <div className="flex flex-row ">
        <SidebarContainer collapsed={sideBarCollapsed} />
        {props.children}
      </div>
    </div>
  );
}
