import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  function setNumFun() {
    setNum(num+1)
  }

  function setNum2Fun() {
    setNum2(num2+1)
  }

  useEffect(() => {
    console.log('num value is changed');
  }, [num])

  useEffect(() => {
    console.log('num2 value is changed');
  }, [num2])
  
  
  return (
    <div>
      <h1>num : {num}</h1>
      <h1>num2 : {num2}</h1> 
      <button onClick={setNumFun} onDoubleClick={setNum2Fun}>Click</button>
    </div>
  )
}

export default App
