import React from 'react'
//components should be imported from here if needed
// make use of your normal import statement here to import components
// make use of the css module folder or tailwind or you can use inline styles
// check the sample on nav and footer for css modules


const Members = ({members}) => {

const membersList = members.data
console.log(membersList);
  return (
    <section>
    <div className='container'>
    <header>
      Team members
    </header>

      <ul>
      {/* {membersList.map((member,index) => (
        <li>{member.name}</li>
      ))} */}

      </ul>
    </div>

    </section>
  )
}

export default Members