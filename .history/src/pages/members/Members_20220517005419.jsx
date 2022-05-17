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
        <li className='flex justify-between'><span className='w-[50px]'>id</span><span className='w-[50px]'>firstname</span><span className='w-[50px]'>lastname</span><span className='w-[50px]'>gender</span><span className='w-[50px]'>phone</span> <span className='w-[50px]'>website</span><span className='w-[50px]'>email</span><span className='w-[50px]'>birthday</span> </li>
      {members&&members.data.map((member,index) => (
        <li className='flex justify-between' key={index}>
          <span className=''>{member.id}</span>
          <span className=''>{member.lastname}</span>
          <span className=''>{member.firstname}</span>
          <span className=''>{member.gender}</span>
          <span className='w-[50px]'>{member.phone}</span>
          <span className='w-[50px]'>{member.website}</span>
          <span className='w-[50px]'>{member.email}</span>
          <span className='w-[50px]'>{member.birthday}</span>
        </li>
      ))}

      </ul>
    </div>

    </section>
  )
}

export default Members