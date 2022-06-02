import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../processes/postProcesses";
import { signOut } from "../../processes/sessionProcesses";
import { fetchCurrentUser } from "../../processes/userProcesses";
import { getCurrentUserPosts } from "../../selectors/postSelectors";
import { currentUser as getCurrentUser } from "../../selectors/userSelector";
import HomePage from "./HomePage";

export const HomePageContainer = (props) => {
  const { dispatch } = props;
  useEffect(() => {
    fetchCurrentUser(dispatch);
    fetchPosts(dispatch);
  }, [dispatch]);

  return <HomePage {...props} />;
};

const mapStateToProps = (state) => {
  const currentUser = getCurrentUser(state);
  const userPosts = getCurrentUserPosts(state);
  console.log(userPosts);
  return {
    currentUser,
    userPosts,
  };
};

export default connect(mapStateToProps)(HomePageContainer);
