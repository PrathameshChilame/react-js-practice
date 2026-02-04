import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'

const Product = () => {
  return (
    <div>
      <Navbar2/>
      <div className='flex justify-center gap-10 py-5'>
        <Link to='/product/men'>Mens Collection</Link>
        <Link to='/product/women'>Womens Collection</Link>
        <Link to='/product/kids'>Mens Collection</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Product
