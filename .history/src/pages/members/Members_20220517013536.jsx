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

      <div className='flex gap-5 flex-wrap'>
      {members&&members.data.map((member,index) => (
   
        <div className='w-[300px] mb-[3rem]'>
        <img src={member.image} alt="" />
          {/* <span className='bg-black text-white flex-1'>{member.lastname}</span>
          <span className='bg-black text-white flex-1'>{member.firstname}</span>
          <span className='bg-black text-white flex-1'>{member.gender}</span>
          <span className='bg-black text-white flex-1'>{member.phone}</span>
          <span className='bg-black text-white flex-1'>{member.website}</span>
          <span className='bg-black text-white flex-1'>{member.email}</span> */}
          {/* <span className='bg-black text-white w-[200px]'>{member.birthday}</span> */}
          {/* <span className='bg-black text-white'>{member.id}</span> */}

        </div>

         

    
      ))}

      </div>
    </div>

    </section>
  )
}

export default Members