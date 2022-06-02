import PostForm from "./PostForm";
import { updatePost } from "../../../processes/postProcesses";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

const UpdatePostFormContainer = (props) => {
  return <PostForm edit={true} {...props} />;
};

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  const { post } = ownProps;
  return {
    initialValues: post,
    post,
  };
}

export default connect(mapStateToProps)(
  reduxForm({
    onSubmit: updatePost,
  })(UpdatePostFormContainer)
);
