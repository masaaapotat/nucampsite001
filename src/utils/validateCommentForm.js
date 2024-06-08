import React from 'react'

export const validateCommentForm = (values) => {
     // since we dont know the errors
    const errors={}
    if (values.rating ) {
        errors.rating = 'Required';
    } else if (values.author.length<2) {
        errors.author = 'Must be at least 2 characters.';
    }else if( values.author.length>15) {
         errors.author = 'Must be 15 characters or less.';
    }
  return errors;
}
