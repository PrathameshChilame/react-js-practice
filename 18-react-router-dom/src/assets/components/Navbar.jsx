import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-10 gap-10 bg-pink-500'>
        <h3>Sheryians</h3>
        <div className='flex items-center gap-10'>
          <div className='flex justify-between items-center gap-10 bg-pink-500'>
        <div className='flex items-center gap-10'>
          <Link to='/home'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/product'>Product</Link>
        </div>
      </div>
        </div>
      </div>
  )
}

export default Navbar
