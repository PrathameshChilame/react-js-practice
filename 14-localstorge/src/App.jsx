import React from 'react'

const App = () => {

  localStorage.setItem('Name', 'Allen')
  localStorage.setItem('Age', 18)
  const name = localStorage.getItem('Name')
  const age = localStorage.getItem('Age')

  const user = {
    username : 'Sarthak',
    age : 18,
    city : 'Bhopal'
  }

  localStorage.setItem('user', JSON.stringify(user))

  const user1 = localStorage.getItem('user')
  console.log(user1);
  console.log(typeof user1);

  const user2 = JSON.parse(localStorage.getItem('user'))
  console.log(typeof user2);
  
  
  

  //localStorage.removeItem()
  //localStorage.clear()

  console.log(name);
  console.log(age);
  

  return (
    <div>
      App
    </div>
  )
}

export default App
