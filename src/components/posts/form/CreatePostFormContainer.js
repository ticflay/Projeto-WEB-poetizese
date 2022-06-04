import React, { useEffect } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import CreatePostForm from "./PostForm";
import { createPost } from "../../../processes/postProcesses";
import { fetchCategories } from "../../../processes/categoryProcesses";
import { getAllCategories } from "../../../selectors/categorySelector";

function CreatePostFormContainer(props) {
  useEffect(() => {
    fetchCategories(props.dispatch);
  }, [props.dispatch]);

  return <CreatePostForm {...props} />;
}

function mapStateToProps(state) {
  return {
    initialValues: {
      user_id: state?.currentUser?.id,
    },
    categories: getAllCategories(state),
  };
}

export default connect(mapStateToProps)(
  reduxForm({
    form: "createPost",
    onSubmit: createPost,
  })(CreatePostFormContainer)
);
