import React from 'react'
import { useNavigate } from 'react-router-dom';
import Back from '../pages/Back';
import Next from '../pages/Next';


const Navbar2 = () => {
  const navigate = useNavigate()
  const btnClicked = () => {
    console.log('Button is clicked');
    navigate('/home')
  }

  return (
    <div className='py-3 px-5 bg-cyan-500'>
      <div className='flex'>
        <button onClick={btnClicked} className='bg-green-500 px-5 py-2 m-2 rounded cursor-pointer active:scale-95'>Return to home page</button>
        <Back/>
        <Next/>
      </div>
    </div>
  )
}

export default Navbar2
