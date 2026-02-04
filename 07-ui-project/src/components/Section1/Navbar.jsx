import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 py-5'>
      <h4 className='bg-black text-white px-5 py-3 rounded-full uppercase text-xs'>Target Audience</h4>
      <button className='bg-gray-200 px-5 py-3 rounded-full uppercase tracking-wider text-xs'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar
