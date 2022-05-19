import React from 'react'

const Greeting = () => {
const getEmail=JSON.parse(sessionStorage.getItem('Details'))

  return (
    <div className='text-center shadow-lg md:ml-[200px]'>
    <h1 className='p-5 md:text-[1.5rem]'>Hello <span className="font-bold">{getEmail.email}</span> 
    </h1>
    </div>
  )
}

export default Greeting