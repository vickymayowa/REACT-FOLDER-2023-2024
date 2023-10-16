import React from 'react'

const Facts = () => {
    setInterval(() => {
        fetch("https://catfact.ninja/fact")
        .then(res=>res.json())
        .then(data=>console.log(data))
    }, 5000);
  return (
    <>

    </>
  )
}

export default Facts