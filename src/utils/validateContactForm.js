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
  return (
    <div>validateContactForm</div>
  )
}
