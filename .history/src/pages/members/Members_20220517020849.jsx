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
      <th className='text-left'>fullname</th>
      <th className='text-left'>gender</th>
      <th className='text-left'>phone</th>
      <th className='text-left'>email</th>
      <th className='text-left'>image</th>
    </tr>
 


  {members&&members.data.map((member,index) => (
      <tr>
      <td>
      {member.firstname} {member.lastname}
      </td>
      <td>
      {member.gender} 
      </td>
      <td>
      {member.phone} 
      </td>
      <td>
      {member.email} 
      </td>
      <td>
      {member.image} 
      </td>
      </tr>
      ))}
   
    
 
</table>
    
    </div>

    </section>
  )
}

export default Members