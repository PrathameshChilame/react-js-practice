import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incByAmount, increment } from './redux/features/counterSlice'

const App = () => {

  // send value
  const dispatch = useDispatch() 
  // accept value
  const count = useSelector((state)=>state.counter.value) 

  const [num, setNum] = useState(5)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch(increment())
      }}>Increment</button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>Decrement</button>

      <input 
      value={num}
      type="number" 
      onChange={(e)=>{
        console.log(e.target.value);
        setNum(e.target.value)
      }}/>
      <button onClick={()=>{
        dispatch(incByAmount(Number(num)))
      }}>Increase by Amount</button>
    </div>
  )
}

export default App
