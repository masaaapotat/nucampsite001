// import React from 'react'

export const validateContactForm = (values) => {
    // since we dont know the errors
    const errors={};
    // first name
    if (!values.firstName) {
        errors.firstName='Required';
    }else if (values.firstName.length < 2) {
        errors.firstName= 'Must be at least 2 characters.';
    }else if (values.firstName.length>15) {
        errors.firstName= 'Must be 15 characters or less';
    }


    // last name
    if (!values.lastName) {
        errors.lastName='Required';
    }else if (values.lastName.length < 2) {
        errors.firstNlastNameame= 'Must be at least 2 characters.';
    }else if (values.lastName.length>15) {
        errors.lastName= 'Must be 15 characters or less';
    }

    // regex that checks that from the beginning to the end of the value all parts of the value are made up of digits
    const reg = /^\d+$/;
    // test if whatever is in the phone number is anything else than digit
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.';
    }
    // email
    // check if the email contains an @
    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }
  return (
    <div>validateContactForm</div>
  )
}
