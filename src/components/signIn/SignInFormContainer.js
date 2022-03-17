import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import SignInForm from "./SignInForm";
import { signIn } from "../../processes/sessionProcesses";

function mapStateToProps() {
  return {
    initialValues: {},
  };
}

export default connect(mapStateToProps)(
  reduxForm({
    form: "signInForm",
    onSubmit: signIn,
  })(SignInForm)
);
