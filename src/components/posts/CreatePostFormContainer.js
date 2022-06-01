import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import CreatePostForm from "./CreatePostForm";
import { createPost } from "../../processes/postProcesses";

function mapStateToProps(state) {
  return {
    initialValues: {
      user_id: state.currentUser.id,
    },
  };
}

export default connect(mapStateToProps)(
  reduxForm({
    form: "createPost",
    onSubmit: createPost,
  })(CreatePostForm)
);
