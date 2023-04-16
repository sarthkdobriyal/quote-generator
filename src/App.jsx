import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bookmarks from './pages/Bookmarks'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { add } from './slices/bookmarkSlice'
import axios from 'axios'



function App() {

  

  return (
    <div className=" text-center h-screen bg-gradient-to-tr from-purple-900 to-purple-300" >
      <BrowserRouter>
      <Navbar /> 
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/bookmarks" Component={Bookmarks} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
