import React, { useState } from 'react'
import Label from './Label'
import Button from './Button'
import { useForm } from 'react-hook-form'

const Assignment2 = () => {
  const [text, setText] = useState()
  const [value, setValue] = useState()

  const capture = (e) => {
    const value = e.target.value.replace(/\D/g, "")
    setText(value)
    
    
  }
  
  
  const style = {
    border: 'none',
  }
  const stylesssss = {
    border: '2px solid red',
  }
 

   const handleChange =(e) =>{
    
    

  }
   
  return (
    <>
      <form>
        <Label counter="Sum -0" /> <br />
        <input
          className="m-3"
          name="text"
          id="text"
          value={text}
          onChange={capture}
          type="text"
        />
        <br />
       
        <Button inc="Sum" onChange={handleChange}/>
      </form>
    </>
  )
}

export default Assignment2
