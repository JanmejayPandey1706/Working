import React, {useState} from 'react'


const Button = (props) => {
    // const [count, setCount] = useState(0)
    // function Increment(){
    //     setCount(count+2)
    // }

    // function Decrement(){
    //     setCount(count-1)
    // }
  return (
  <>
    <button className='btn' >{props.inc}</button>
   
    </>
  )
}

export default Button