import React, {useState} from 'react'


const Main = () => {
  const [count, setCount] = useState(0)
 
  return (
    <>
     <section className=' card text-center'>
     
       <div className='d-flex justify-content-center style mt-5 '>
       
         <div className='btn' onClick={() =>{ setCount(count+2)}}>Increment</div>
         <div className='btn' onClick={() =>{ setCount(count-1)}}>Decrement</div>
       </div>
     </section>  
    </>
  )
}

export default Main