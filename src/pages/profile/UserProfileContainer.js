import React, { useEffect } from "react";
import { currentUser as getCurrentUser } from "../../selectors/userSelector";
import { getCurrentUserPosts } from "../../selectors/postSelectors";
import { fetchPosts } from "../../processes/postProcesses";
import { fetchCurrentUser } from "../../processes/userProcesses";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";

const UserProfileContainer = (props) => {
  const { dispatch } = props;
  useEffect(() => {
    fetchCurrentUser(dispatch);
    fetchPosts(dispatch);
  }, [dispatch]);

  return <UserProfile {...props} />;
};

const mapStateToProps = (state) => {
  const currentUser = getCurrentUser(state);
  const userPosts = getCurrentUserPosts(state);
  return {
    currentUser,
    userPosts,
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
