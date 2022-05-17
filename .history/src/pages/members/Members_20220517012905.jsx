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
          {/* <span className='bg-black text-white'>{member.id}</span> */}
        {member.image}
          {/* <span className='bg-black text-white flex-1'>{member.lastname}</span>
          <span className='bg-black text-white flex-1'>{member.firstname}</span>
          <span className='bg-black text-white flex-1'>{member.gender}</span>
          <span className='bg-black text-white flex-1'>{member.phone}</span>
          <span className='bg-black text-white flex-1'>{member.website}</span>
          <span className='bg-black text-white flex-1'>{member.email}</span> */}
          {/* <span className='bg-black text-white w-[200px]'>{member.birthday}</span> */}
         

        </li>
      ))}

      </ul>
    </div>

    </section>
  )
}

export default Members