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
        <li className='flex justify-between'><span className='flex-1'>id</span><span className='flex-1'>firstname</span><span className='flex-1'>lastname</span><span className='flex-1'>gender</span><span className='flex-1'>phone</span> <span className='flex-1'>website</span><span className='flex-1'>email</span><span className='flex-1'>birthday</span> </li>
      {members&&members.data.map((member,index) => (
        <li className='flex justify-between' key={index}>
          <span className='flex-1'>{member.id}</span>
          <span className='flex-1'>{member.lastname}</span>
          <span className='flex-1'>{member.firstname}</span>
          <span className='flex-1'>{member.gender}</span>
          <span className='flex-1'>{member.phone}</span>
          <span className='flex-1'>{member.website}</span>
          <span className='flex-1'>{member.email}</span>
          <span className='flex-1'>{member.birthday}</span>
        </li>
      ))}

      </ul>
    </div>

    </section>
  )
}

export default Members