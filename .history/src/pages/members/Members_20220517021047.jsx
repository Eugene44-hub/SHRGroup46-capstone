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
<table className='w-full'>
 
    <tr>
      <th className='text-left py-5'>fullname</th>
      <th className='text-left py-5'>gender</th>
      <th className='text-left py-5'>phone</th>
      <th className='text-left py-5'>email</th>
      <th className='text-left py-5'>image</th>
    </tr>
 


  {members&&members.data.map((member,index) => (
      <tr>
      <td className='py-5'>
      {member.firstname} {member.lastname}
      </td>
      <td className='py-5'>
      {member.gender} 
      </td>
      <td className='py-5'>
      {member.phone} 
      </td>
      <td className='py-5'>
      {member.email} 
      </td>
      <td className='py-5'>
      <img src={member.image} className="w-[50px] h-[50px]" alt="" />
      </td>
      </tr>
      ))}
   
    
 
</table>
    
    </div>

    </section>
  )
}

export default Members