import React,{useState,useEffect} from 'react'
import Loading from '../Loading/Loading'
import './Posts.scss'
import PostCard from '../../components/PostCard/PostCard'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
const Posts = () => {
    const [dis,setDis]=useState(false)
    const [posts,setPosts]=useState(null)
    const getData =async()=>{
        const {data}=await axios.get('http://localhost:8080/post')
        setPosts(data)
    }
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
        if(posts){
            setDis(true)
        }
    },[posts])
    const user=JSON.parse(localStorage.getItem('Placement'))
    const id=user?.result?._id
  return (
    <div className='posts-container'>
            <Navbar />
            {!dis ? <Loading/> :
            <div className='container my-5'>
                <div className="row">

               {posts.map(p=>(
                <div className="col-3 my-2" key={p._id }>
                    <PostCard post={p} id={id}/>
                </div>
               ))}
                                   
                </div>
            </div>  
            }
    </div>
  )
}

export default Posts