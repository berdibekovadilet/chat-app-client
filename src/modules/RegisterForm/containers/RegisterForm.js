import { withFormik } from "formik";
import validateForm from "../../../utils/validate";
import RegisterForm from "../components/RegisterForm";

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    fullname: "",
    password: "",
    password_2: "",
  }),
  validate: (values) => {
    let errors = {};
    validateForm({ isAuth: false, values, errors });
    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  },
  displayName: "RegisterForm",
})(RegisterForm);
