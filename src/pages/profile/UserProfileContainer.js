import React, { useEffect } from "react";
import {
  currentUser as getCurrentUser,
  getUserById,
} from "../../selectors/userSelector";
import {
  getCurrentUserPosts,
  getPostsByUserId,
} from "../../selectors/postSelectors";
import { fetchPosts } from "../../processes/postProcesses";
import { fetchCurrentUser, fetchUsers } from "../../processes/userProcesses";
import { connect, useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import { useParams } from "react-router";

const UserProfileContainer = (props) => {
  const { dispatch } = props;
  const { id } = useParams();
  const user = useSelector((state) => getUserById(state, id));
  const currentUser = useSelector((state) => getCurrentUser(state));
  const isCurrent = id == currentUser?.id;
  const posts = useSelector((state) => getPostsByUserId(state, id));
  console.log(posts);
  useEffect(() => {
    fetchCurrentUser(dispatch);
    fetchUsers(dispatch);
    fetchPosts(dispatch);
  }, [dispatch]);

  return (
    <UserProfile user={user} isCurrent={isCurrent} posts={posts} {...props} />
  );
};

const mapStateToProps = (state, ownProps) => {
  const currentUser = getCurrentUser(state);
  return {
    currentUser,
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
