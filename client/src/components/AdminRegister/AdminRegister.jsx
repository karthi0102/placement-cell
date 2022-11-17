import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminRegister.scss'
import axios from 'axios'
const AdminRegister = ({change}) => {
  const navigate=useNavigate()
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [image,setImage]=useState(null)
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
  const [isAdmin,setAdmin]=useState(true)
  const [department,setDepartment]=useState('')
    const dept = [
      "Civil Engineering",
      "Mechanical Engineering",
      "Mechatronics Engineering",
      "Automobile Engineering",
      "Chemical Engineering",
      "Food Technology",
      "Electrical and Electronics Engineering",
      "Electronics and Instrumentation Engineering",
      "Electronics and Communication Engineering",
      "Computer Science and Engineering",
      "Information Technology",
      "Computer Science and Design",
      "Artificial Intelligence (AIML & AIDS)",
      "Management Studies",
      "Computer Application",
      "Computer Technology - UG",
      "Computer Technology - PG",
      "Mathematics",
      "Physics",
      "Chemistry",
      "English"
    ];
    const handleSubmit =async(e)=>{
      e.preventDefault()
      const formData = new FormData()
      formData.append('name',name)
      formData.append('email',email)
      formData.append('password',password)
      formData.append('photo',image)
      formData.append('department',department)
      formData.append('isAdmin',isAdmin)
      formData.append('phone',phone)
      const config=  {
           headers:{
        'Content-Type':'multipart/form-data'
          }
        }
      try {
        const {data}=await axios.post('http://localhost:8080/user/signup',formData,config)
        localStorage.setItem('Placement',JSON.stringify(data))
        navigate('/Details')
      } catch (error) {
        alert(error)
      }
    }
  return (
    <div className='register-page-container'>
        <div className="image-container">
          <img src="https://images.unsplash.com/photo-1577141262638-5548257565d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjdWx0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
         <div className="register-form-container">
                <div className="brand">
                     <i className="fa-solid fa-graduation-cap"></i>
                    <p>KEC-PLACEMENTS</p>
                </div>
                  <div className="register-form">
                    <p className="text-center mb-0 ">Register</p>
                    <form className='row g-2' onSubmit={handleSubmit}>
                     
                      <div className="col-6">
                        <label className="form-label">Name</label>
                        <input type="text" name="name" id="" value={name} onChange={e=>setName(e.target.value)} className="form-control" />
                      </div>
                      <div className="col-6">
                        <label className="form-label">Email(kongu.edu)</label>
                        <input type="email" name="email" id="" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" />
                      </div>

                       <div className="col-6">
                        <label className="form-label">Phone</label>
                        <input type="tel" name="phone" id="" value={phone} onChange={e=>setPhone(e.target.value)} className="form-control" />
                      </div>
                      <div className="col-6">
                        <label  className="form-label">Profile</label>
                        <input type="file" name="" id="" onChange={e =>setImage(e.target.files[0]) }className="form-control" />
                      </div>
                      <div className="col-6">
                        <label className="form-label">Password</label>
                        <input type="password" name="password" id="" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" />
                      </div>
                     <div className="col-6">
                        <label className="form-label">Department</label>
                        <select className='form-select' onChange={e=>setDepartment(e.target.value)}>
                            {dept.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                     </div>
                      <div className="d-grid gap-2 my-3">
                        <button className="btn">Register</button>
                      </div>
                    </form>
                     <p className='login'>Already have an Account? <span onClick={change}>Login</span></p>
                  </div>
                   

            </div>
    </div>
  )
}

export default AdminRegister
