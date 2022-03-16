import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import SignUpForm from "./SignUpForm";
import { signUp } from "../../processes/registrationProcesses";

function mapStateToProps(state) {
  return {
    initialValues: {},
  };
}

export default connect(mapStateToProps)(
  reduxForm({
    form: "signUpForm",
    onSubmit: signUp,
  })(SignUpForm)
);
