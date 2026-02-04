import React from 'react'
import Card1 from './components/Card1'
import Card2 from './components/Card2'

const App = () => {
  return (
    <div>
      <div className='card'>
        <h1>This is h1 tag</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, eligendi?</p>
      </div>
      <div className='card'>
        <h1>This is h1 tag</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, eligendi?</p>
      </div>
      <Card1 />
      <Card1 />
      <Card2 />
    </div>
  )
}

export default App
