// Function to validate the user login form
const validateUserLoginForm = (values) => {
  const errors = {};

  // Validate username
  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 6) {
    errors.username = "Username must be at least 6 characters";
  } else if (values.username.length > 15) {
    errors.username = "Username must be at most 15 characters";
  }

  // Validate password
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  return errors;
};

export default validateUserLoginForm;
