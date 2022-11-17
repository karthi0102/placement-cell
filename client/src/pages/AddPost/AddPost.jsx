import React, { useState } from 'react'
import './AddPost.scss'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect } from 'react'

const AddPost = () => {
  const navigate=useNavigate()
  
 
  
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
 const handleSubmit =async(e)=>{
    e.preventDefault();
     const user=JSON.parse(await localStorage.getItem('Placement'))
    const postedBy = user?.result._id;
    try {
        const {data}=await axios.post('http://localhost:8080/post',{title,description,postedBy});
        navigate('/Posts')
    } catch (error) {
        alert(error.message)
    }

 }
  return (
    <div className='addpost-container'>
        <Navbar />
        
        <div className="container ">
            <div className="row my-5">
                <div className="col-6 offset-3">
                    <div className="card shadow">
                        <div className="card-body">
                                <h4 className="text-center header">ADD NEW POST</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3 form-group">
                                        <label className="form-label">Title</label>
                                        <input type="text" className="form-control" value={title} onChange={e=>setTitle(e.target.value)} />
                                    </div>
                                    <div className="mb-3 form-group">
                                        <label className="form-label">Description</label>
                                        <textarea className='form-control'  cols="5" rows="5" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button className="btn">NEW POST</button>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost