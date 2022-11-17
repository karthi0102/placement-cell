import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './EditPage.scss'
import Navbar from '../../components/Navbar/Navbar'
import Loading from '../Loading/Loading'

const EditPage = () => {
  const [dis,setDis]=useState(false)
  const [user,setUser]=useState(null)
   const [name,setName]=useState()
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [rollno,setRollNo]=useState('')
  const [department,setDepartment]=useState('')
  const [batch,setBatch]=useState('')
  const [cgpa,setCgpa]=useState('')
  const [history,setHistory]=useState('')
  const [backlogs,setBackLog]=useState('')
  const storage = JSON.parse(localStorage.getItem('Placement'))
  let batchYear=[]
  var year = new Date().getFullYear()
   for (let increment = -4; increment <= 4; increment++) {
        batchYear.push(year - increment);
    }
  const getData=async()=>{
        const id=storage.result._id
        const {data}=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(data)
    }
  useEffect(()=>{
    getData()
  },[])
  useEffect(()=>{
        if(user){
            setName(user.name)
            setEmail(user.email)
            setPhone(user.phone)
            setRollNo(user.rollno)
            setBatch(user.batch)
            setHistory(user.history)
            setBackLog(user.backlogs)
            setCgpa(user.cgpa)
            setDepartment(user.department)
            setDis(true)
        }
  },[user])
  
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
        e.preventDefault();
        setDis(false)
        const id=storage.result._id
        try{
        const {data}=await axios.patch(`http://localhost:8080/user/${id}`,{name,email,phone,department,batch,rollno,cgpa,history,backlogs})
        setUser(data)
        window.location.reload()
        }catch(err){
            alert(err)
        }
    }
  return (
    <div className='edit-page-container'>
        <Navbar/>
        {!dis ? <Loading/>:
        <div className="edit-form-container my-5 container">
            <div className="image-container">
                <img src={user.image} alt={user.name} />
            </div>
            <div className="edit-form">
                 <form className='row g-2 'onSubmit={handleSubmit}>
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
                     
                      
                      <p className="fieldset mt-3">Educational Details</p>
                      <div className="col-4">
                        <label  className="form-label">Roll No</label>
                        <input type="text" name="rollno" id="" value={rollno} onChange={e=>setRollNo(e.target.value)} className='form-control' />
                      </div>
                      <div className="col-4">
                        <label className="form-label">Department</label>
                        <select defaultValue={department} name="department" id="" className="form-select" onChange={ e => setDepartment(e.target.value)}>
                          {dept.map(d=> <option key={d} value={d}>{d}</option>)}
                        </select>
                      </div>
                      <div className="col-4">
                        <label  className="form-label">Batch</label>
                        <select defaultValue={batch} className='form-select' name="batch" id="" onChange={e=>setBatch(e.target.value)}>
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
                        <button className="btn">EDIT</button>
                      </div>
                </form>
            </div>
        </div>
}
    </div>
  )
}

export default EditPage