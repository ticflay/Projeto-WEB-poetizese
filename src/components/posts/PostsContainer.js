import React, { useEffect } from "react";
import { connect } from "react-redux";
import Posts from "./Posts";
import { fetchPosts } from "../../processes/postProcesses";
import { getAllPosts } from "../../selectors/postSelectors";

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

export default connect(mapStateToProps)(PostsContainer);
