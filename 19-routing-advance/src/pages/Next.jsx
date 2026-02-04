import React from 'react'
import { useNavigate } from 'react-router-dom'

const Next = () => {

  const navigate = useNavigate()
  const btnClicked = () => {
    console.log('Button is clicked');
    navigate(+1)
  }

  return (
    <div>
      <button onClick={btnClicked} className='bg-green-500 px-5 py-2 m-2 rounded cursor-pointer active:scale-95'>Next</button>
    </div>
  )
}

export default Next
