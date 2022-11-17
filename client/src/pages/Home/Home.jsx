import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.scss'
import Loading from '../Loading/Loading'
import { useEffect } from 'react'
const Home = () => {
    const [loaded,setLoaded]=useState(false)
    const navigate=useNavigate()
    const handleFaculty =()=>{
        navigate('/Faculty/Auth')
    }
     const handleStudent =()=>{
        navigate('/Student/Auth')
    }
    const checkAuth =async()=>{
        try {
            const token = await localStorage.getItem('Placement')
            if(token){
                setLoaded(true)
                return navigate('/Details')
            }
            setLoaded(true)
        } catch (error) {
            
        }
    }
    useEffect(()=>{
            checkAuth()
    },[])
    
    
  return (
    <div className='home-container'>
        {!loaded? <Loading/> :<>
            <div className="brand">
                    <i className="fa-solid fa-graduation-cap"></i>
                    <p>KEC-PLACEMENTS</p>
            </div>
            <div className="choose-container">
                <div className="faculty" onClick={handleFaculty}>
                    <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRlYWNoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <p className="role">Faculty</p>
                </div>
                <div className="student" onClick={handleStudent}>
                    <div className="img-container">
                    <img src="https://media.istockphoto.com/id/1372615072/photo/male-high-school-friends-studying-together.jpg?b=1&s=170667a&w=0&k=20&c=R3uANYr2ihAKmjE3GERQLQkPvQ97IrwERzsz3cVqFak=" alt="" />
                    </div>
                    <p className="role">Student</p>
                </div>
            </div>
            </>
    }
    </div>
  )
}

export default Home
