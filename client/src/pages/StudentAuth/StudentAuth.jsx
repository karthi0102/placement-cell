import React,{useState} from 'react'
import './StudentAuth.scss'
import Register from '../../components/Register/Register'
import Login from '../../components/Login/Login'
const StudentAuth = () => {

    const [login,isLogin]=useState(true)
    const handleChange  = ()=>{
      isLogin(!login)
    }
  return (
    <div className='auth-container'>
      <div className="form-container">
        {login ? <Login  change={handleChange}/> :<Register change={handleChange}/>}
      </div>
    </div>
  )
}

export default StudentAuth
