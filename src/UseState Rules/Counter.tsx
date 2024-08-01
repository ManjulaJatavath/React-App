import React, { useState } from 'react';
//Function Component
const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

//function for increment
const Increment =()=>{
  setCount(count+1)
}
//function for Decrement
const Decrement =()=>{
  setCount(count-1)
}
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default Counter;



