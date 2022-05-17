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
        <li className='flex justify-between'><span className='w-[1%] text-center'>id</span><span className='w-[1%] text-center'>firstname</span><span className='w-[1%] text-center'>lastname</span><span className='w-[1%] text-center'>gender</span><span className='w-[1%] text-center'>phone</span> <span className='w-[1%] text-center'>website</span><span className='w-[1%] text-center'>email</span><span className='w-[1%] text-center'>birthday</span> </li>
      {members&&members.data.map((member,index) => (
        <li className='flex justify-between overflow-x-auto' key={index}>
          <span className='w-[1%] text-center'>{member.id}</span>
          <span className='w-[1%] text-center'>{member.lastname}</span>
          <span className='w-[1%] text-center'>{member.firstname}</span>
          <span className='w-[1%] text-center'>{member.gender}</span>
          <span className='w-[1%] text-center'>{member.phone}</span>
          <span className='w-[1%] text-center'>{member.website}</span>
          <span className='w-[1%] text-center'>{member.email}</span>
          <span className='w-[1%] text-center'>{member.birthday}</span>
        </li>
      ))}

      </ul>
    </div>

    </section>
  )
}

export default Members