import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AdminLogin.scss'
const AdminLogin = ({change}) => {
    const navigate=useNavigate()
     const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit =async(e)=>{
        e.preventDefault()
        try {
            const {data}=await axios.post('http://localhost:8080/user/login',{email,password})
            localStorage.setItem('Placement',JSON.stringify(data))
            navigate('/Details')
        } catch (error) {
            alert(error)
        }
    }
  return (
    <div className="login-page-container">
            <div className="image-container">
                    <img src="https://images.unsplash.com/photo-1577141262638-5548257565d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjdWx0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="login-form-container">
                <div className="brand">
                     <i className="fa-solid fa-graduation-cap"></i>
                    <p>KEC-PLACEMENTS</p>
                </div>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                                <p className='form-header text-center'>LOGIN</p>
                              
                                    <div className="form-group mb-3">
                                        <label  className="form-label">Email</label>
                                        <input type="email" name="email"value={email} onChange={e=>setEmail(e.target.value)} className='form-control' />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label  className="form-label">Password</label>
                                        <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} className='form-control' />
                                    </div>
                                    <div className="d-grid gap-2">
                                            <button className="btn">Login</button>                            
                                    </div>
                               
                           
                    </form>
                    <p className='register'>Don't have an Account? <span onClick={change}>Register</span></p>
                </div>
            </div>
        </div>
  )
}

export default AdminLogin