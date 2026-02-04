import React from 'react'

const App = () => {
  function onSubmitFun(e) {
    e.preventDefault()
    console.log('Form is submitted');
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        onSubmitFun(e)
      }}>
        <input  className='border-2 p-5 m-5 rounded-2xl' type="text" placeholder='Enter your name'/>
        <button className='bg-blue-500 m-5 p-5 rounded-2xl'>Button</button>
      </form>
    </div>
  )
}

export default App
