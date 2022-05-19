import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Nav.module.css'
const navItems=[{
  item:'Home',
  url:'/'
},
{
  item:'members',
  url:'/'
},
{
  item:'product',
  url:'/'
},
{
  item:'logout',
  url:'/'
}]
const Nav = ({showNav,handleNav}) => {
  const navigate=useNavigate()
  return (
    <nav className={`${styles.nav}`}>
      <header className='py-5 text-white justify-between md:hidden flex'>
      <h1 className='flex-1'>
        <p className='text-center font-bold uppercase'>
        Group46 capstone

        </p>
      </h1>

      <button onClick={handleNav} className=''>
       open nav
      </button>
      </header>
      
      <div  className={`fixed md:w-[200px] overflow-hidden transition-all ${showNav?"w-[200px]":"w-[0px]"} bg-black z-50 pt-5 top-0 h-full`}>
      <ul>

{navItems.map((navItem,index)=>(<li className='my-5 p-3 transition-all hover:bg-gray-200 hover:text-black'>
  <button className='capitalize ' onClick={()=>navigate(navItem.url)}>{navItem.item}</button>
</li>))}
<li>

</li>
</ul>
      </div>

    </nav>
  )
}

export default Nav