import React from 'react'
import { useSpring, animated } from 'react-spring';
const Abc = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
      <animated.div style={props}>
        <h1 className='text-black'>Hello, world!</h1>
      </animated.div>
    );
}

export default Abc