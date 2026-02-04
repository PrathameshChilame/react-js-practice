import React from 'react'
import { useNavigate } from 'react-router-dom'

const Back = () => {

  const navigate = useNavigate()
  const btnClicked = () => {
    console.log('Button is clicked');
    navigate(-1)
  }

  return (
    <div>
      <button onClick={btnClicked} className='bg-green-500 px-5 py-2 m-2 rounded cursor-pointer active:scale-95'>Back</button>
    </div>
  )
}

export default Back
