import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.scss'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate()
    const user=JSON.parse(localStorage.getItem('Placement'))
    const handleLogout =async()=>{
        localStorage.clear();
        navigate('/')
    }
  return (
   <nav className='navbar-container'>
        <div className="navbar-brand">
           <i className="fa-solid fa-graduation-cap"></i>
           <p>KEC-PLACEMENTS</p>
        </div>
        <div className="nav-contents">
            <li className="nav-item" style={{display:"flex",gap:10,alignItems:"center"}}>
                <img src={user.result.image} alt="" />
                <NavLink  to='/Edit' activeclassname="active" className='nav-link'>{user.result.name}</NavLink>
            </li>
           
            {user.result.isAdmin &&
            <li className="nav-item">
                <NavLink  to='/Details' activeclassname="active" className='nav-link'>Student Details</NavLink>
            </li>
        
            }
             {user.result.isAdmin &&
            <li className="nav-item">
                <NavLink  to='/Add' activeclassname="active" className='nav-link'>Add Post</NavLink>
            </li>
        
            }
             <li className="nav-item">
                <NavLink  to='/Posts' activeclassname="active" className='nav-link'>Posts</NavLink>
            </li>
            <li className='nav-item'>
                <div className='nav-link p-0' onClick={handleLogout}>Logout</div>
            </li>
            </div>
   </nav>
  )
}

export default Navbar
