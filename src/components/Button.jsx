import axios from 'axios'
import React from 'react'


const Button = () => {
    let URl = 'http://localhost:5000/api/register'
    const handleButtonClick =  ()=>{    
        // axios.post(URl , { Message : 'Hello From the Frontend' })
        axios.post(URl , 
      { 
        fullname : 'mayowa adebanjo', 
        username : "vickydev" , 
        email:"deanjo2@outlook.com", 
        password: "letcode" 
      })
    }
  return (
    <>
        <button
            type="button"
            onClick={handleButtonClick}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
    </>
  )
}

export default Button