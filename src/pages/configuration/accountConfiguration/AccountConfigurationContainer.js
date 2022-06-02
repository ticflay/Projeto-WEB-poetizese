import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../../../processes/userProcesses";
import { currentUser as getCurrentUser } from "../../../selectors/userSelector";
import AccountConfiguration from "./AccountConfiguration";
import { reduxForm } from "redux-form";
import { updateCurrentUser } from "../../../processes/userProcesses";

export const AccountConfigurationContainer = (props) => {
  const { dispatch } = props;
  useEffect(() => {
    fetchCurrentUser(dispatch);
  }, [dispatch]);

  return <AccountConfiguration {...props} />;
};

const mapStateToProps = (state) => {
  const currentUser = getCurrentUser(state);
  return {
    currentUser,
    initialValues: {
      currentUser,
    },
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "updateUser",
    onSubmit: updateCurrentUser,
  })(AccountConfigurationContainer)
);
