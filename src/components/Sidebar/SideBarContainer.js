import React, { useEffect } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { signOut } from "../../processes/sessionProcesses";
import { fetchCurrentUser } from "../../processes/userProcesses";
import { currentUser as getCurrentUser } from "../../selectors/userSelector";
import Sidebar from "./Sidebar";

export const SidebarContainer = (props) => {
  const { dispatch } = props;

  useEffect(() => {
    fetchCurrentUser(dispatch);
  }, [dispatch]);

  return <Sidebar {...props} />;
};

const mapStateToProps = (state) => {
  const currentUser = getCurrentUser(state);
  return {
    currentUser,
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "logout",
    onSubmit: signOut,
  })(SidebarContainer)
);
