import React,{useState} from 'react'
import './FacultyAuth.scss'
import AdminLogin from '../../components/AdminLogin/AdminLogin'
import AdminRegister from '../../components/AdminRegister/AdminRegister'
const FacultyAuth = () => {

    const [login,isLogin]=useState(true)
    const handleChange  = ()=>{
      isLogin(!login)
    }
  return (
    <div className='auth-container'>
      <div className="form-container">
        {login ? <AdminLogin  change={handleChange}/> :<AdminRegister change={handleChange}/>}
      </div>
    </div>
  )
}

export default FacultyAuth
