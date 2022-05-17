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
        <li><span className='w-[100px]'>id</span><span className='w-[100px]'>firstname</span><span className='w-[100px]'>lastname</span><span className='w-[100px]'>gender</span><span className='w-[100px]'>phone</span> <span className='w-[100px]'>website</span><span className='w-[100px]'>email</span><span className='w-[100px]'>birthday</span> </li>
      {members&&members.data.map((member,index) => (
        <li key={index}>
          <span className='w-[100px]'>{member.id}</span>
          <span className='w-[100px]'>{member.lastname}</span>
          <span className='w-[100px]'>{member.firstname}</span>
          <span className='w-[100px]'>{member.gender}</span>
          <span className='w-[100px]'>{member.phone}</span>
          <span className='w-[100px]'>{member.website}</span>
          <span className='w-[100px]'>{member.email}</span>
          <span className='w-[100px]'>{member.birthday}</span>
        </li>
      ))}

      </ul>
    </div>

    </section>
  )
}

export default Members