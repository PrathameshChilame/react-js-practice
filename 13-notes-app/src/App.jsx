import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()    
    const copyTask = [...task];
    copyTask.push({title, details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    console.log(copyTask[idx]);
    copyTask.splice(idx, 1)
    setTask(copyTask)
    
  }

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  return (
    <div className='h-screen bg-black text-white lg:flex'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} action="" className='flex flex-col lg:w-1/2 items-start p-10 gap-3'>

          <h1 className='text-5xl font-bold'>Add Notes</h1>

          <input 
          type="text" 
          placeholder='Enter task'
          className='border-2 rounded p-10 text-white w-full'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          />

        <textarea onChange={(e)=>{
          setDetails(e.target.value)
        }} name="" id="" 
        className='border-2 rounded p-3 text-white h-50 w-full' 
        placeholder='Enter details here' 
        value={details}></textarea>

        <button className='bg-white active:scale-98 active:bg-gray-500 text-black px-5 py-2 rounded w-full'>Add Notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-5xl font-bold'>Recent notes</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 m-5 h-[90%] overflow-auto'>
        {task.map(function(elem, idx) {
          return <div key={idx} className="flex justify-between flex-col items-start relative h-70 w-4/14 rounded-2xl text-black p-5 bg-cover bg-[url('data:image/jpeg;base64,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')]">
            <div>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className='w-full cursor-pointer active:scale-98 bg-red-500 text-white py-2 rounded font-bold'>Delete</button>
            </div>
        })}
      </div>
      </div>
    </div>
  )
}

export default App
