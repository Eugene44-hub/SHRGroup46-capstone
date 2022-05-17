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
        <li><span className='mx-3'>id</span><span className='mx-3'>firstname</span><span className='mx-3'>lastname</span><span className='mx-3'>gender</span><span className='mx-3'>phone</span> <span className='mx-3'>website</span><span className='mx-3'>email</span><span className='mx-3'>birthday</span> </li>
      {members&&members.data.map((member,index) => (
        <li key={index}>
          <span className='mx-3'>{member.id}</span>
          <span className='mx-3'>{member.lastname}</span>
          <span className='mx-3'>{member.firstname}</span>
          <span className='mx-3'>{member.gender}</span>
          <span className='mx-3'>{member.phone}</span>
          <span className='mx-3'>{member.website}</span>
          <span className='mx-3'>{member.email}</span>
          <span className='mx-3'>{member.birthday}</span>
        </li>
      ))}

      </ul>
    </div>

    </section>
  )
}

export default Members