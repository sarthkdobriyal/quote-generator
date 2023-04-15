import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' px-12 py-3  md:px-16 md:py-5 flex justify-between text-xl md:text-3xl text-white text-bold bg-gradient-to-tr from-purple-900 to-purple-300' >
        <Link to="/" className=' hover:text-fuchsia-500'> Home </Link>
        <Link to="/bookmarks" className=' hover:text-fuchsia-500'>Bookmarks</Link>
    </div>
  )
}

export default Navbar