import React from "react"
import { useState } from "react"

const Content = () => {
    
  const [count,setCount]=useState(99);
  function decrement()
  {
     setCount(count-1);
  }
  function increment()
  {
    setCount(count +1);
  }
  return (
    <>
    
    <button onClick={decrement}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button>
    </>
  )
}

export default Content