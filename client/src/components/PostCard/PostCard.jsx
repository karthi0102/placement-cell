import React from 'react'
import './PostCard.scss'
import moment from 'moment'
import axios from 'axios'
const PostCard = ({post,id}) => {
  const handleDelete =async()=>{
    const id=post._id
    try {
      const {data}=await axios.delete(`http://localhost:8080/post/${id}`)
      window.location.reload()
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className='post-card-container'>
        <div className="card shadow">
            <div className="card-body">
                <h1>{post.title}</h1>
                <p>{post.description}</p>
               <p>PostedBy - {post.postedBy.name}</p>
               <hr />
               <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
               {post.postedBy._id==id ? <p><i onClick={handleDelete} class="fa-solid fa-trash"></i></p> :<p></p>}
               <p className='p-0 text-center'><i class="fa-solid fa-clock"></i> {moment(post.postedOn).fromNow()}</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default PostCard