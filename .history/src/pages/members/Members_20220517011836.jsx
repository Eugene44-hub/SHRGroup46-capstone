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

      <ul className='overflow-x-scroll'>
        <li className='flex '><span className=''>id</span><span className=''>firstname</span><span className=''>lastname</span><span className=''>gender</span><span className=''>phone</span> <span className=''>website</span><span className=''>email</span><span className=''>birthday</span> </li>
      {members&&members.data.map((member,index) => (
        <li className='flex ' key={index}>
          <span className='bg-black text-white'>{member.id}</span>
          <div className='justify-between flex flex-1'>
          <div className='bg-black text-white w-[200px]'>{member.lastname}</div>
          <div className='bg-black text-white w-[200px]'>{member.firstname}</div>
          <div className='bg-black text-white w-[200px]'>{member.gender}</div>
          <div className='bg-black text-white w-[200px]'>{member.phone}</div>
          <div className='bg-black text-white w-[200px]'>{member.website}</div>
          <div className='bg-black text-white w-[200px]'>{member.email}</div>
          <div className='bg-black text-white w-[200px]'>{member.birthday}</div>
          </div>

        </li>
      ))}

      </ul>
    </div>

    </section>
  )
}

export default Members