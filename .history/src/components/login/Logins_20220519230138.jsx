import React from 'react'
import styles from './Logins.module.css'
import {FaUserAlt} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Logins = () => {
  const[validate, setValidate] = React.useState(false)
  const[form, setForm] = React.useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
      if(form.email !== "" && 
      form.password !== ""){
          setValidate(true)
      }else{
        setValidate(false)
      }
  }, [form.email, form.password])

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
}

  const handleSumbit = (e) => {
      e.preventDefault();
      sessionStorage.setItem('Details', JSON.stringify({...form}))
      //window.location= '/'
      navigate('/')
  
  }
  

  
  return (
    <section className="fixed h-full w-full top-[0] flex px-2">
<div className={`${styles.container} logins w-full  md:w-[35rem] m-auto bg-transparent py-8 px-4 md:px-6 rounded-md`}>
        <h1 className='text-3xl font-semibold text-center text-white mb-6'>Login</h1>
        <form onSubmit={handleSumbit} className='text-center'>
            <div className=' items-center flex bg-white px-2 rounded-md'>
                <FaUserAlt size={20} />
                <input className='flex-1 text-lg py-2  outline-none' name='email'  type="email" placeholder='Email' onChange={handleChange} required/>
            </div>
            <div className=' items-center flex bg-white px-2 mt-6 rounded-md'>
                <RiLockPasswordFill size={20}/>
                <input className='flex-1 text-lg py-2  outline-none' name='password'  type="password" placeholder='Password' onChange={handleChange} required/>
            </div>
            
            {validate && <button  className={`py-2 mt-10 w-full text-white bg-[#555] text-xl font-normal rounded-full`}>Submit</button>}
            
        
        </form>
    </div>
    </section>
    
  )
}

export default Logins
