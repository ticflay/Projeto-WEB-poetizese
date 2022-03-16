import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import CreatePostForm from "./CreatePostForm";
import { createPost } from "../../processes/postProcesses";

function mapStateToProps() {
  return {
    initialValues: {},
  };
}

export default connect(mapStateToProps)(
  reduxForm({
    form: "createPost",
    onSubmit: createPost,
  })(CreatePostForm)
);
