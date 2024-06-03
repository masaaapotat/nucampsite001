import React from 'react'

// Define the Partner component
export const Partner = ({partner}) => {
    // Check if partner has a truthy value
    if (partner) {
        // Destructure the properties from the partner object
        const { image, name, description } = partner;
        //  JSX to render
        return (
            <>
                <img  src={image} alt={name} style={{ width: '150px' }}/>
                <div className='m-4'>
                <h5 className='fw-bold'>{name}</h5>
                    {description}
                </div>

            </>
         ); 
    }
    return null;

}
export default Partner;
