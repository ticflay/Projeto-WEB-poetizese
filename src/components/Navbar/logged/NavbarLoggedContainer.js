import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../../../processes/userProcesses";
import { currentUser as getCurrentUser } from "../../../selectors/userSelector";
import NavbarLogged from "./NavBarLogged";

export const NavbarLoggedContainer = (props) => {
  const { dispatch } = props;

  useEffect(() => {
    fetchCurrentUser(dispatch);
  }, [dispatch]);

  return <NavbarLogged {...props} />;
};

const mapStateToProps = (state) => {
  const currentUser = getCurrentUser(state);
  return {
    currentUser,
  };
};

export default connect(mapStateToProps)(NavbarLoggedContainer);
