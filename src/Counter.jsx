import React, { useEffect, useState } from 'react'
import './Counter.css'

function Counter() {
    const[counter , setCount]=useState(0);
  
    useEffect(()=>{
      const increment =setInterval(()=>{
        setCount(counter+1);
      },1000);
      return()=>clearInterval(increment)
    })
    function Reset(){
      setCount(0)
    }

  return (
    <div className='div1'>
        
        <h1 className='head1'>Auto Counter</h1>
      <h3>Timer : <b className='boldd'> {counter} </b>seconds</h3>
      <button onClick={Reset} className='btn'>RESET</button>
    </div>
  )
}

export default Counter