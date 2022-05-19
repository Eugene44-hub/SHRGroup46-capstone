import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FaBars} from "react-icons/fa"
import styles from './Nav.module.css'
const navItems=[{
  item:'dashboard',
  url:'/*'
},
{
  item:'members',
  url:'/*members'
},
{
  item:'product',
  url:'/*product'
},
{
  item:'logout',
  url:'/login'
}]
const Nav = ({showNav,handleNav}) => {
  const navigate=useNavigate()
  return (
    <nav className={`${styles.nav}`}>
      <header className='p-5 text-white justify-between md:hidden flex'>
      <h1 className='flex-1'>
        <p className='text-center font-bold uppercase'>
        Group46 capstone

        </p>
      </h1>

      <button onClick={handleNav} className=''>
 <FaBars/>
      </button>
      </header>
      
      <div  className={`fixed md:w-[200px] overflow-hidden transition-all ${showNav?"w-[200px]":"w-[0px]"} bg-black z-50 pt-5 top-0 h-full`}>
      <ul>

{navItems.map((navItem,index)=>(<li style={{cursor:"pointer"}} onClick={()=>{navigate(navItem.url); handleNav()}} className='my-5 hover:cursor uppercase font-bold p-3 capitalize transition-all hover:bg-gray-200 hover:text-black'>
 {navItem.item}
</li>))}
<li>

</li>
</ul>
      </div>

    </nav>
  )
}

export default Nav