import React from "react";
import PostCreationScreen from "./PostCreationScreen";
import { connect } from "react-redux";

const PostCreationScreenContainer = (props) => {
  return <PostCreationScreen {...props} />;
};

function mapStateToProps(state) {}

export default connect(mapStateToProps)(PostCreationScreenContainer);
