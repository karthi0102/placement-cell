import React,{useState} from 'react'
import './Register.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = ({change}) => {
  const navigate = useNavigate()
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [image,setImage]=useState(null)
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
  const [confirm,setConfirm]=useState('')
  const [rollno,setRollNo]=useState('')
  const [department,setDepartment]=useState('')
  const [batch,setBatch]=useState('')
  const [cgpa,setCgpa]=useState('')
  const [history,setHistory]=useState('')
  const [backlogs,setBackLog]=useState('')
  const [isAdmin,setAdmin]=useState(false)
  let batchYear=[]
  var year = new Date().getFullYear()
   for (let increment = -4; increment <= 4; increment++) {
        batchYear.push(year - increment);
    }
    const handleSubmit =async (e)=>{
      e.preventDefault()
      const formData = new FormData()
      formData.append('name',name)
      formData.append('email',email)
      formData.append('password',password)
      formData.append('photo',image)
      formData.append('department',department)
      formData.append('rollno',rollno)
      formData.append('phone',phone)
      formData.append('batch',batch)
      formData.append('cgpa',cgpa)
      formData.append('history',history)
      formData.append('backlogs',backlogs)
      formData.append('isAdmin',isAdmin)
      const config=  {
           headers:{
        'Content-Type':'multipart/form-data'
          }
        }
        try{
          const {data}=await axios.post('http://localhost:8080/user/signup',formData,config)
          localStorage.setItem('Placement',JSON.stringify(data))
          navigate('/Edit')
        }catch(err){
          alert(err)
        }
    }
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
  return (
    <div className='register-page-container'>
        <div className="image-container">
          <img src="https://images.unsplash.com/photo-1604882737197-e5de968c805a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0dWRlbnQlMjBzdHVkeWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>

         <div className="register-form-container">
                <div className="brand">
                     <i className="fa-solid fa-graduation-cap"></i>
                    <p>KEC-PLACEMENTS</p>
                </div>
                  <div className="register-form">
                    <p className="text-center mb-0 ">Register</p>
                    <form className='row g-2'onSubmit={handleSubmit}>
                      <p className="fieldset">Personal Details</p>
                      <div className="col-4">
                        <label className="form-label">Name</label>
                        <input type="text" name="name" id="" value={name} onChange={e=>setName(e.target.value)} className="form-control" />
                      </div>
                      <div className="col-4">
                        <label className="form-label">Email(kongu.edu)</label>
                        <input type="email" name="email" id="" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" />
                      </div>

                       <div className="col-4">
                        <label className="form-label">Phone</label>
                        <input type="tel" name="phone" id="" value={phone} onChange={e=>setPhone(e.target.value)} className="form-control" />
                      </div>
                      <div className="col-4">
                        <label  className="form-label">Profile</label>
                        <input type="file" name="" id="" onChange={e =>setImage(e.target.files[0]) }className="form-control" />
                      </div>
                      <div className="col-4">
                        <label className="form-label">Password</label>
                        <input type="password" name="password" id="" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" />
                      </div>
                      <div className="col-4">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" name="confirm" id="" value={confirm} onChange={e=>setConfirm(e.target.value)} className="form-control" />
                      </div>
                      <p className="fieldset mt-3">Educational Details</p>
                      <div className="col-4">
                        <label  className="form-label">Roll No</label>
                        <input type="text" name="rollno" id="" value={rollno} onChange={e=>setRollNo(e.target.value)} className='form-control' />
                      </div>
                      <div className="col-4">
                        <label className="form-label">Department</label>
                        <select name="department" id="" className="form-select" onChange={ e => setDepartment(e.target.value)}>
                          {dept.map(d=> <option key={d} value={d}>{d}</option>)}
                        </select>
                      </div>
                      <div className="col-4">
                        <label  className="form-label">Batch</label>
                        <select className='form-select' name="batch" id="" onChange={e=>setBatch(e.target.value)}>
                          {batchYear.map(b=> <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                      <div className="col-4">
                        <label  className="form-label">CGPA</label>
                        <input type="number" name="cgpa" id="" value={cgpa} onChange={e=>setCgpa(e.target.value)} className="form-control" />
                      </div>
                      <div className="col-4">
                        <label htmlFor="" className="form-label">History of Arrears</label>
                        <input type="number" name="hisotry" id="" value={history} onChange={e=>setHistory(e.target.value)} className="form-control" />
                      </div>
                      <div className="col-4">
                        <label className="form-label">Backlog</label>
                        <input type="number" name="backlog" id="" value={backlogs} onChange={e=>setBackLog(e.target.value)} className="form-control" />
                      </div>
                                            
                      <div className="d-grid gap-2">
                        <button className="btn">Register</button>
                      </div>
                    </form>
                     <p className='login'>Already have an Account? <span onClick={change}>Login</span></p>
                  </div>
                   

            </div>
    </div>
  )
}

export default Register
