import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full  border-b border-white-400 px-12 py-3  md:px-16 md:py-5 flex justify-between text-xl md:text-3xl text-white text-bold' >
        <a href="/" className=' hover:text-fuchsia-500'> Home </a>
        <a href="/bookmarks" className=' hover:text-fuchsia-500'>Bookmarks</a>
    </div>
  )
}

export default Navbar