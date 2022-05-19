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
const Nav = () => {
  const navigate=useNavigate()
  return (
    <nav className={`${styles.nav} `}>
      <div className='fixed w-[200px] bg-black z-50 pt-5 top-0 h-full'>
      <ul>

{navItems.map((navItem,index)=>(<li className='my-5'>
  <button className='capitalize bg-green' onClick={()=>navigate(navItem.url)}>{navItem.item}</button>
</li>))}
<li>

</li>
</ul>
      </div>

    </nav>
  )
}

export default Nav