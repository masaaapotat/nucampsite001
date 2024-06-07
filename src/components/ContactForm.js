import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form } from "formik";
import React from "react";

const ContactForm = () => {
    // definng the handle submit function
    // has 2 params and the argument passed to the values will be provided tp the function by the formik component when it calls this function
    // value-will be whaetever was submitted in the form
    // reset form is a destructed function , utility function that formik provides to reset the form
    const handleSubmit=(values, {resetForm})=>{
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm()
    }
  return (
    <Formik
      // Defining the initial values for the form fields via the initialValues prop that we pass to Formik
      initialValues={{
        // Properties we want to capture in our form
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: "",
        agree: false,
        contactType: "",
        feedback: "",
      }}
    //   another prop
    // when the formik component recieves it will know to call the handle submit function
    onSubmit={handleSubmit}
    >
      {/* We render the Form component inside Formik */}
      <Form>
        {/* FormGroup component from reactstrap is used in a similar way as form-group class in Bootstrap to group labels, fields, controls, and validation error messages together */}
        {/* They have a prop of row which gives them the Bootstrap row class */}
        <FormGroup row>
          <Label htmlFor="firstName" md="2">
            First Name
          </Label>
          <Col md="10">
            <Field
              name='firstName'
              placeholder='First Name'
              className='form-control'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="lastName" md="2">
            Last Name
          </Label>
          <Col md="10">
            <Field
              name='lastName'
              placeholder='Last Name'
              className='form-control'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="phoneNum" md="2">
            Phone
          </Label>
          <Col md="10">
            <Field
              name='phoneNum'
              placeholder='Phone'
              className='form-control'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="email" md="2">
            Email
          </Label>
          <Col md="10">
            <Field
              name='email'
              placeholder='Email'
              type='email'
              className='form-control'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label check md={{ size: 4, offset: 2 }}>
            {/* For md and above viewports, take up a third of a row (4 columns) and offset it by two columns so that it is positioned further to the right */}
            <Field
              name='agree'
              type='checkbox'
              className='form-check-input'
            />
            {/* {' '}just for the space tu */}
            {' '}
            May we contact you?
          </Label>
          <Col md="4">
            <Field
              name='contactType'
              as='select'
              placeholder=''
              className='form-control'
            >
              {/* Options for the select menu */}
              <option>By Phone</option>
              <option>By Email</option>
            </Field>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="feedback" md="2">
            Your Feedback
          </Label>
          <Col md="10">
            <Field
              name='feedback'
              as='textarea'
              rows='12'
              className='form-control'
            />
          </Col>
        </FormGroup>
        {/* Add a submit button */}
        <FormGroup row>
          <Col md={{size:10, offset: 2}} >
            <Button type='submit' color='primary'>Send Feedback</Button>
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default ContactForm;
