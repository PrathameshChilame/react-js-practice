import React from 'react'
import styles from './Header.module.css'


const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Shreyains</h3>
      <button className='btn'>Log in</button>
    </div>
  )
}

export default Header
