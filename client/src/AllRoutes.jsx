import React from 'react'
import { Routes,Route } from 'react-router-dom'
import StudentAuth from './pages/StudentAuth/StudentAuth'
import Home from './pages/Home/Home'
import FacultyAuth from './pages/FacultyAuth/FacultyAuth'
import Details from './pages/Details/Details'
import EditPage from './pages/EditPage/EditPage'
import Posts from './pages/Posts/Posts'
import AddPost from './pages/AddPost/AddPost'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Faculty/Auth' element={<FacultyAuth />} />
        <Route path='/Student/Auth' element={<StudentAuth />} />
        <Route path='/Details' element={<Details />} />
        <Route path='/Edit' element={<EditPage />} />
         <Route path='/Posts' element={<Posts />} />
         <Route path='/Add' element={<AddPost />} />
    </Routes>
  )
}

export default AllRoutes
