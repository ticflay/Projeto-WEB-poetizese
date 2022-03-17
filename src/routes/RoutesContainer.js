import React from "react";
import { connect } from "react-redux";
import LobbyRoutes from "./LobbyRoutes";
import AppRoutes from "./AppRoutes";

function RoutesContainer({ loggedIn, ...rest }) {
  return loggedIn ? <AppRoutes {...rest} /> : <LobbyRoutes {...rest} />;
}

function mapStateToProps({ accessToken }) {
  return {
    loggedIn: !!accessToken,
  };
}

export default connect(mapStateToProps)(RoutesContainer);
