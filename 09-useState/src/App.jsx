import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function incNum() {    
    setNum(num+1)
  }

  function decNum() {
    setNum(num-1)
  }

  function incby5() {
    setNum(num+5)
  }

  const [pinfo, setPinfo] = useState({name:'Allen', age:18})

  function updatePinfo() {
    let newPinfo = {...pinfo}
    newPinfo.name = pinfo.name + 1
    newPinfo.age = newPinfo.age + 1
    setPinfo(newPinfo)
  }

  const [arr, setArr] = useState([10, 20, 30])
  function updateArr() {
    let newArr = [...arr]
    newArr[0] = newArr[0] + 11
    newArr.push(50)
    setArr(newArr)
  }

  const [val, setVal] = useState(10)
  function batchUpdate() {
    setVal(val=>(val+1))
    setVal(val=>(val+1))
    setVal(val=>(val+1))
    setVal(val=>(val+1))
    setVal(val=>(val+1))
  }

  return (
    <div>
      <h1 className='bg-lime-500, w-fit text-5xl bg-blue-300 p-10 m-2 rounded-3xl'>{num}</h1>
      <button onClick={incNum} className='bg-blue-500 p-2 m-2 rounded-3xl'>Increase</button>
      <button onClick={decNum} className='bg-blue-500 p-2 m-2 rounded-3xl'>Decrease</button>
      <button onClick={incby5} className='bg-blue-500 p-2 m-2 rounded-3xl'>increase by 5</button>
      <br />
      <h2>Personal Info : {pinfo.name}, {pinfo.age}</h2>
      <button onClick={updatePinfo} className='bg-blue-500 p-2 m-2 rounded-3xl'>update Info</button>
      <br />
      <h2>Array value : {arr[0]}</h2>
      <button onClick={updateArr} className='bg-blue-500 p-2 m-2 rounded-3xl'>update Array</button>
      <br />
      <h2>Batch Update {val}</h2>
      <button onClick={batchUpdate} className='bg-blue-500 p-2 m-2 rounded-3xl'>increase by 5</button>
    </div>
  )
}

export default App
