import React, { useState, useMemo } from 'react'

import Label from './Label'
import Button from './Button'

function Assignment1(props) {
  const [count, setCount] = useState(0)

  const Increment = () => {
    setCount(count + 2)
    // console.warn(Increment)
  }
  console.log(count)

  function Decrement() {
    if(count>0){
    setCount(count - 1)
    }else{
      return 0;
    }
    // console.warn(Decrement)
  }
  return (
    <>
    <div className='d-flex justify-content-center'>
    
    <div>
    <h1>Assignment1 <br/></h1>
      <Label  counter={`'Counter-${count} '`} /> <br />
      <div className='d-flex'>
      <div onClick={Increment}>
        <Button inc="Increment" />
      </div>
      <div onClick={Decrement}>
        <Button inc="Decrement" />
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Assignment1
