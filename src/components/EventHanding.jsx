import React, { useState } from 'react'

const EventHanding = () => {
  const [count, setCount] = useState(0);
//   const [users, setUsers] = useState("")
  const [Name, setName ] = useState("Vickydev")

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count > 0) {
        setCount(count -1)
    }
  };
  return (
    <>
    <h3 className='text-center text-black'>Counter : {count}</h3>
        <button onClick={Increment} className='btn btn-info rounded rounded-3 ms-3 p-2 m-2'>Increment</button>
        <button onClick={Decrement} className='btn btn-danger rounded rounded-3 ms-2 p-2 m-2'>Decrement</button>
        <h1 className='text-center text-black text-muted'>Your Name : {Name}</h1>
        <input type="text" placeholder='Enter your Name' className='form-control' onChange={(event)=>setName(event.target.value)}/>
    </>
  )
}

export default EventHanding