
import React, { useState, useEffect } from 'react';
import "./index.css"
  

const Example=(props)=> {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
  });     
      return (
        <div>
        <button id="btn" onMouseMove = {() => setCount(count+1)}>
          Click Here!
        </button>
        {<h1>You Clik' {props.name} {count} times</h1>}
        </div>
        );
  }
  console.log('endinfs')
  const Examp=()=>{
    return(
        <div>
            <Example name='sara'/>
            <Example name='john'/>
        </div>
    )
  }
export  {Example, Examp};
