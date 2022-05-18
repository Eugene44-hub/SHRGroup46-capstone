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
        <li className='flex justify-between'><span className=''>fullname</span><span className=''>gender</span><span className=''>phone</span> <span className=''>email</span> <span className=''>image</span> </li>
      {members&&members.data.map((member,index) => (
        <li className='flex justify-between mb-5 items-center' key={index}>
          {/* <span className='bg-black text-white'>{member.id}</span> */}
        
        <img src="" alt="" />
          <span className='bg-black text-white flex-1'>{member.firstname} {member.lastname}</span>
          <span className='bg-black text-white flex-1'>{member.gender}</span>
          <span className='bg-black text-white flex-1'>{member.phone}</span>
          <span className='bg-black text-white flex-1'>{member.email}</span>
          <img src={member.image} className='bg-black text-white w-[50px] rounded-full h-[50px]' alt='client'/>
         

        </li>
      ))}

      </ul>
    </div>

    </section>
  )
}

export default Members