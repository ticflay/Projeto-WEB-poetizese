import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  FaHome,
  FaUser,
  FaPencilAlt,
  FaCog,
  FaInfo,
  FaBars,
  FaSignOutAlt,
  FaBook,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { css } from "glamor";
import { colors } from "../../lib/themeColors";
const sideBar = css({
  backgroundColor: colors.purple,
});

export default function Sidebar(props) {
  const { currentUser, collapsed } = props;

  return (
    <div className="max-h-full">
      <ProSidebar
        image={require("../../assets/backscreen.png")}
        onToggle={props.handleToogle}
        collapsed={collapsed}
        breakPoint="sm"
      >
        <SidebarHeader className="flex flex-row justify-between p-4">
          {!collapsed && (
            <div className="flex flex-col items-center">
              {currentUser?.name ? (
                <div className="pb-2">{currentUser?.name}</div>
              ) : null}
              {currentUser?.email && (
                <div className="pb-2">{currentUser?.email}</div>
              )}
              {currentUser?.username && (
                <div className="pb-2">{currentUser?.username}</div>
              )}
            </div>
          )}
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <MenuItem icon={<FaHome />}>
              Inicial <Link to="/" />
            </MenuItem>
            <MenuItem icon={<FaUser />}>
              Perfil
              <Link to={`/profile/${currentUser?.id}`} />
            </MenuItem>
            <MenuItem icon={<FaBook />}>
              Poemas <Link to="/posts" />
            </MenuItem>
            <SubMenu title="Configurações" icon={<FaCog />}>
              <MenuItem>
                Sua conta <Link to="/settings/account" />
              </MenuItem>
            </SubMenu>
            <MenuItem icon={<FaInfo />}>
              Literatura
              <Link to="/literatura" />
            </MenuItem>
            <MenuItem icon={<FaPencilAlt />}>
              Publique <Link to="/createPost" />
            </MenuItem>
            {/* <MenuItem icon={<FaSearch />}>Procurar</MenuItem> */}
            <MenuItem icon={<FaSignOutAlt />} onClick={props.handleSubmit}>
              Sair
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
}
