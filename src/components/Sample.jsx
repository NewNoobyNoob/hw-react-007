import React from "react";
import { useState } from "react";
//import React, { useState } from 'react'; // the same above in two lines could be written in one line


export function Sample() {
    const [initial, setInitial] = useState('sample initial state value');

    return (
        <div>
        <p className="SampParOne">{initial}</p> <br />
        {/* <button onClick={() => setInitial('new value after click')}>{initial}</button> <br /> <br /> */}
        <button className="SampBTN" onClick={() => setInitial('new value after click - Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, omnis.')}>Click</button>
        </div>
    )
}

export const Counter = () => {
    const [count, setCount] = useState(0); //there should be entered any initial number
    const incrementCount = () => setCount(count + 1);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={incrementCount}>Click Me</button>
      </div>
    )
  }


// export default Sample; // if we export named functions we do not need to export default