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
        <li><span className='w-[40px]'>id</span><span className='w-[40px]'>firstname</span><span className='w-[40px]'>lastname</span><span className='w-[40px]'>gender</span><span className='w-[40px]'>phone</span> <span className='w-[40px]'>website</span><span className='w-[40px]'>email</span><span className='w-[40px]'>birthday</span> </li>
      {members&&members.data.map((member,index) => (
        <li key={index}>
          <span className='w-[40px]'>{member.id}</span>
          <span className='w-[40px]'>{member.lastname}</span>
          <span className='w-[40px]'>{member.firstname}</span>
          <span className='w-[40px]'>{member.gender}</span>
          <span className='w-[40px]'>{member.phone}</span>
          <span className='w-[40px]'>{member.website}</span>
          <span className='w-[40px]'>{member.email}</span>
          <span className='w-[40px]'>{member.birthday}</span>
        </li>
      ))}

      </ul>
    </div>

    </section>
  )
}

export default Members