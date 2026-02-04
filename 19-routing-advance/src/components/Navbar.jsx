import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex py-5 px-10 items-center bg-blue-500 justify-between'>
      <h2 className='text-xl font-bold'>Sheryians</h2>
      <div className='flex gap-10'>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/courses'>Courses</Link>
        <Link to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
