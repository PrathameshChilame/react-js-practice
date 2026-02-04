import React from 'react'

const Navbar = (props) => {
  console.log(props);

  function changeTheme(){
    props.setTheme('Theme change', props.theme)
    props.setTheme('Dark')

  }

  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
