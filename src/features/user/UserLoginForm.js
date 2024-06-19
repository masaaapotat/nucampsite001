import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser, selectCurrentUser } from "./userSlice";
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import defaultAvatar from "../../app/assets/img/unicorn.png";
import validateUserLoginForm from "../../utils/validateUserLoginForm";

const UserLoginForm = () => {
  // Local state for controlling the modal
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  // Get the current user from the Redux state
  const currentUser = useSelector(selectCurrentUser);

  // Get the dispatch function from useDispatch hook
  const dispatch = useDispatch();

  // Event handler for form submission
  const handleLogin = (values) => {
    // Create a new user object
    const currentUser = {
      id: Date.now(), // Unique ID for the user
      avatar: defaultAvatar,
      username: values.username,
      password: values.password,
    };
    // Dispatch the setCurrentUser action with the new user object
    dispatch(setCurrentUser(currentUser));
    // Close the login modal
    setLoginModalOpen(false);
  };

  return (
    <>
      {/* Display the user avatar if logged in, otherwise display the login button */}
      <span className="navbar-text ml-auto">
        {currentUser ? (
          <div style={{ width: "4rem", height: "4rem" }}>
            <img
              src={currentUser.avatar}
              alt="user"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ) : (
          <Button
            outline
            onClick={() => setLoginModalOpen(true)}
            style={{ color: "white", border: "1px solid white" }}
          >
            <i className="fa fa-sign-in fa-lg" /> Login
          </Button>
        )}
      </span>
      {/* Modal for login form */}
      <Modal isOpen={loginModalOpen}>
        <ModalHeader toggle={() => setLoginModalOpen(false)}>Login</ModalHeader>
        <ModalBody>
          {/* Formik form for handling login */}
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={handleLogin}
            validate={validateUserLoginForm} // Add the validation function here
          >
            <Form>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Field
                  id="username"
                  name="username"
                  placeholder="Username"
                  className="form-control"
                />
                {/*   error message for username */}
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-danger"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Field
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
                {/*  error message for password */}
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </FormGroup>
              <Button type="submit" color="primary">
                Login
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserLoginForm;
