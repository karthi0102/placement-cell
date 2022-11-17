import React from 'react'
import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './AllRoutes'
const App = () => {
  return (
    <div className='App-container'>
      <Router>
          <AllRoutes />
      </Router>
    </div>
  )
}

export default App
