import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import Loading from '../Loading/Loading'
import './Details.scss'

const Details = () => {
  const [loaded,setLoading]=useState(false)
  const [users,setUsers]=useState(null)
  const [dept,setDept]=useState('')
  const [cgpa,setCgpa]=useState()
  const[logs,setLogs]=useState()
  const [history,setHistory]=useState()
  const getData =async()=>{
    try {
      const {data}=await axios.get('http://localhost:8080/user')
      setUsers(data)
      setLoading(true)
    } catch (error) {
      alert(error)
    } 
  }
  useEffect(()=>{
    console.log('hii')
      getData()
    
  },[])
  
  const depts = [
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
    const handleDepartment =async(dept) =>{
        setLoading(false)
      setDept(dept)
        console.log(dept);
       const data =await users.filter(f => dept==f.department)
       console.log(data)
       if(data.length==0){
          setUsers(data)
            setInterval(()=>{
                window.location.reload()
            },1000)
          }else{
            setUsers(data)
        }
       
       setLoading(true)
    }

    const handleBackLogs =async(logs)=>{
      setLogs(logs)
      setLoading(false)
        console.log(logs);
       const data =await users.filter(f => f.backlogs<=logs)
       console.log(data)
       if(data.length==0){
          setUsers(data)
            setInterval(()=>{
                window.location.reload()
            },1000)
          }else{
            setUsers(data)
        }
       
       setLoading(true)
    }
      const handleCgpa=async(value)=>{
      setCgpa(value)
      setLoading(false)
       const data =await users.filter(f => f.cgpa >= value)
       console.log(data)
       if(data.length==0){
          setUsers(data)
            setInterval(()=>{
                window.location.reload()
            },1000)
          }else{
            setUsers(data)
        }
       
       setLoading(true)
    }
    const handleHistory =async(p)=>{
        setHistory(p)
        setLoading(false)
      
        const data =await users.filter(f => f.history <= p)
        console.log(data)
        if(data.length==0){
            setUsers(data)
            setInterval(()=>{
                window.location.reload()
               },1000)
            }else{
            setUsers(data)
        }
        setLoading(true)
    }
  return (
    <div className=" details-page-container">
      <Navbar />
      {!loaded ? <Loading /> :
        <div className='details-container container '>
          <div className="filter-form my-5">
            <p>Report</p>
            <form className='row g-2'>
              <div className="col-6">
                <label  className="form-label">Search By Department</label>
              <select className='form-select' defaultValue={dept} name="Department" onChange={(e)=>handleDepartment(e.target.value)}>
                {depts.map(d=><option  key={d} value={d}>{d}</option>)}
              </select>
              </div>
              <div className="col-6">
                <label  className="form-label">Search By Backlogs</label>
                <input type="number" placeholder='Backlogs' value={logs} className="form-control" onChange={e=>handleBackLogs(e.target.value)}/>
              </div>
              <div className="col-6">
                <label  className="form-label">Search By CGPA</label>
                <input type="number" value={cgpa} className="form-control" onChange={e=>handleCgpa(e.target.value)}/>
              </div>

              <div className="col-6">
                <label  className="form-label">Search By Hisotry</label>
                <input type="number" value={history} className="form-control" onChange={e=>handleHistory(e.target.value)}/>
              </div>
            </form>
          </div>
          {users.length==0 ? <p className='no-results'>No Results</p> :
          <table className="table table-light table-hover">
                 <thead>
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope='col'>Department</th>
                        <th scope="col">RollNo</th>
                        <th scope="col">Email</th>
                        <th scope="col">Batch</th>
                        <th scope="col">Phone</th>
                        <th scope="col">CGPA</th>
                        <th scope="col">History</th>
                        <th scope="col">Backlog</th>
                      </tr>
                    </thead>
                    <tbody>
                    {users.map((u,idx)=>(
                      <tr key={u._id}>
                        <td>{idx+1}</td>
                        <td><img src={u.image} alt="" /></td>
                        <td>{u.name}</td>
                        <td>{u.department}</td>
                        <td>{u.rollno}</td>
                        <td>{u.email}</td>
                        <td>{u.batch}</td>
                        <td>{u.phone}</td>
                        <td>{u.cgpa}</td>
                        <td>{u.history}</td>
                        <td>{u.backlogs}</td>
                      </tr>
                    ))}
                    </tbody>
            </table>
}
        </div>
      }
    </div>
  )
}

export default Details

