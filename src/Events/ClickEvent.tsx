
import { useState } from 'react'
const ClickEvent = () => {
const[number, setNumber]=useState(0)
const Increment =()=>{
    setNumber(number+1)
  }
  const Decrement =()=>{
    if(number>1){
        setNumber(number-1)
    }
  }
  const reset=()=>{
    setNumber(0)
  }
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={reset}>Reset Number</button>
    </div>
  )
}

export default ClickEvent

