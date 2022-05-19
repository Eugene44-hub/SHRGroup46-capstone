import React from 'react'
//components should be imported from here if needed
// make use of your normal import statement here to import components
// make use of the css module folder or tailwind or you can use inline styles
// check the sample on nav and footer for css modules


const Home = () => {
  let Details = JSON.parse(sessionStorage.getItem("Details"))

  return (
    <div className='text-center'>
      <h1>Hello {Details.email} </h1>
    </div>
  )
}

export default Home