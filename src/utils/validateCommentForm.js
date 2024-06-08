// import React from 'react'

export const validateCommentForm = (values) => {
    // Initialize an empty object to hold validation errors
    const errors = {};

    // Check if the rating field is empty
    if (!values.rating) {
        errors.rating = 'Required';
    }

    if (values.author.length < 2) {
        errors.author = 'Must be at least 2 characters.';
    } else if (values.author.length > 15) {
        errors.author = 'Must be 15 characters or less.';
    }

   

    return errors;
};
