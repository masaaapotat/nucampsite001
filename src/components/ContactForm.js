import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form } from "formik";

import React from "react";

const ContactForm = () => {
  return (
    <Formik
      // {/* defining the top values for the form fields via theinitial values prop that we pass to formik*/}
      // {/* this prop expects a js object for its value , were defining it as an object literal by adding two sets of {{}}, the outer one signifies that we are about to write js in jsx and the inner signifies that we are writing an object*/}
      initalValues={{
        // prpoerties we want to capture in our form
        firstName: "",
        lastName: "",
        phonrNum: "",
        email: "",
        agree: false,
        contactType: "",
        feedback: "",
      }}
    >
      {/* // we render for form component inside the formik, tuli import huko juu kwa imports */}
      <Form>
        {/* formgroup  component form reactstrap is used in a similar way as form-group class in bootsrap to group labels, fields, controls, and validation error messages together*/}
        {/* have a prop of ow which givess them the bootstrap row class */}
        <FormGroup row>
        <Label htmlFor='firstName' md='2'>
                        First Name
                    </Label>
                    <Col md='10'>
                    </Col>

        </FormGroup>
        <FormGroup row>
        <Label htmlFor='lastName' md='2'>
                        Last Name
                    </Label>
                    <Col md='10'>
                    </Col>
        </FormGroup>
        <FormGroup row>
        <Label htmlFor='phoneNum' md='2'>
        phone
                    </Label>
                    <Col md='10'>
                    </Col>
        </FormGroup>
        <FormGroup row>
        <Label htmlFor='email' md='2'>
                        email
                    </Label>
                    <Col md='10'>
                    </Col>
        </FormGroup>
        <FormGroup row>
        <Label check md= {{size:4, offset:2}}>
            {/* above means for md and overview ports take up a third of a row cos (4obvs) and we offset it by two columns so that it is positoned further into the right than the other labels*/}
                       May we contact you?
                    </Label>
                    <Col md='4'>
                    </Col>
        </FormGroup>
        <FormGroup row>
        <Label htmlFor='feedack' md='2'>
                        Your Feedback
                    </Label>
                    <Col md='10'>
                    </Col>
        </FormGroup>
        <FormGroup row>
            
        </FormGroup>

      </Form>
    </Formik>
  );
};

export default ContactForm;
