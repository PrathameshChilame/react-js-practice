import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('sd')

  function onSubmitFun(e) {
    e.preventDefault()
    console.log('Form is submitted');
  }

  function onChangeFun(e) {
    setTitle(e.target.value)
  }

  function onSubmitButtonFun() {
    console.log(title);
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        onSubmitFun(e)
      }}>
        <input onChange={onChangeFun}  className='border-2 p-5 m-5 rounded-2xl' type="text" placeholder='Enter your name' value={title}/>
        <button className='bg-blue-500 m-5 p-5 rounded-2xl' onClick={onSubmitButtonFun}>Button</button>
      </form>
    </div>
  )
}

export default App
