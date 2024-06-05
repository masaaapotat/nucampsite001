// importing usestate and useeffect from react for animation
import { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

const AnimatedDisplayCard = ({ item }) => {
    const { image, name, description } = item;
    // setting a local state variable named toggle

    
    const [toggle, setToggle] = useState(false);


    // creating a style object with the help of reactSpring and storing in a varible called AnimatedStyle

    const animatedStyle= useSpring({
        // usespring expects us to pass an object as an argument and the object should describe the kind of animation that we want to happen
        // if the value of toggle is set to true, we want the opacity 1 whuch is 100%, if the value of opacity os set to false we wan the opacity to be set to 0
        opacity: toggle ? 1 : 0,
        // if the value of toggle is set to true, it means the width and height should be  at 100% otherwise 100% width and 0% height
        transform: toggle? 'scale(1,1)' : 'scale(1,0)',
        // set a config which itself takes an object since there can be multiple configurations
        // we want to apply our animation over half a second
        config: {duration: 500}

        // we want the anmations to apply whenever the display cards components are mounted to the page and not when an update causes them to rerender

       
    })

     // we call useEffect to handle this side effect
    //  the first argument is the side effect we want useEffect to run which we pass inside a callback function
     useEffect(()=>{
        setToggle(true)
     },[])

    return (
        // animatedStyle is the name of the object that we created earlier
        <animated.div style={animatedStyle}>
            <Card>
                <CardImg src={image} alt={name} />
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardText>{description}</CardText>
                    </CardBody>
        </Card>

        </animated.div>
        
    );
};

export default AnimatedDisplayCard;