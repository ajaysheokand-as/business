import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
const TypewriterEffect = ({text}) => {
  return (
    <div >
      <Typewriter
        words={[text]}
        loop={0} // 0 means infinite loop
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default TypewriterEffect;
