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
        <li><span>id</span><span>firstname</span><span>lastname</span><span>gender</span><span>phone</span> <span>website</span><span>email</span><span>birthday</span> </li>
      {members&&members.data.map((member,index) => (
        <li key={index}>
          <span>{member.id}</span>
          <span>{member.lastname}</span>
          <span>{member.firstname}</span>
          <span>{member.gender}</span>
          <span>{member.phone}</span>
          <span>{member.website}</span>
          <span>{member.email}</span>
          <span>{member.birthday}</span>
        </li>
      ))}

      </ul>
    </div>

    </section>
  )
}

export default Members