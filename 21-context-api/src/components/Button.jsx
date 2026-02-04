import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {
  const [theme, setTheme] = useContext(ThemeDataContext)

  const changeTheme = ()=>{
    console.log('hello');
    setTheme('dark')
  }

  return (
    <div className=''>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Button
