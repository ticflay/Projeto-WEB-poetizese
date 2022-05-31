import React, { useEffect } from "react";
import { connect } from "react-redux";
import Posts from "./Posts";
import { fetchPosts } from "../../processes/postProcesses";
import { getAllPosts } from "../../selectors/postSelectors";
import { reduxForm } from "redux-form";
import { signOut } from "../../processes/sessionProcesses";

export const PostsContainer = (props) => {
  const { dispatch } = props;
  useEffect(() => {
    fetchPosts(dispatch);
  }, [dispatch]);

  return <Posts {...props} />;
};

const mapStateToProps = (state) => ({
  posts: getAllPosts(state),
});

export default connect(mapStateToProps)(
  reduxForm({
    form: "logout",
    onSubmit: signOut,
  })(PostsContainer)
);
