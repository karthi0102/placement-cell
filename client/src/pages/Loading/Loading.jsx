import React from 'react'
import './Loading.scss'

const Loading =()=> {
    return (
    <div className="spinner-container" >
        <div className="spinner-border" role="status" >
            <div className="spinner-logo" > 
                <i className="fa-solid fa-graduation-cap" /> 
            </div> 
       </div>
    </div>)
}

export default Loading