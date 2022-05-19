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
    <nav className={`${styles.nav}`}>
<ul>

  {navItems.map((navItem,index)=>(<li>
    <button onClick={()=>navigate(navItem.url)}>{navItem.item}</button>
  </li>))}
  <li>

  </li>
</ul>
    </nav>
  )
}

export default Nav