import React, { useState } from 'react'

function test() {
const  [count, setCount] = useState(0);

  return (
    <>
      <button
      onClick={()=>{
        setCount(count+1);
      }}
>
clicked {count} times
      </button>
    </>
  );
}

export default test

