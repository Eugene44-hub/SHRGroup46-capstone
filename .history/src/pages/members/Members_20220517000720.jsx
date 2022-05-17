import React from 'react'
//components should be imported from here if needed
// make use of your normal import statement here to import components
// make use of the css module folder or tailwind or you can use inline styles
// check the sample on nav and footer for css modules


const Members = ({members}) => {

console.log(members);
  return (
    <section>
    <div className='container'>
    <header>
      Team members
    </header>

      <ul>
      {/* {membersList.map((member,index) => (
        <li key={index}>{member.id}</li>
      ))} */}

      </ul>
    </div>

    </section>
  )
}

export default Members