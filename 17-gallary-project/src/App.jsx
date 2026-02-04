import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card1 from './components/card1'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setindex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)   
    console.log(response);
    setUserData(response.data)
  }

  useEffect(function() {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getData()
  }, [index])
  
  
  let printUserData = <h3 className='text-gray-500 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if(userData.length > 0) {
    printUserData = userData.map(function(elem, idx){
      return <div key={idx}>
        <Card1 elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen text-white'>
      <h1>{index}</h1>
      <div className='flex flex-wrap gap-5 p-5'>
        {printUserData}
      </div>
      <div 
      className='flex justify-center items-center p-4 gap-5'>
        <button onClick={()=> {
          if (index > 1) {
            setindex(index-1)
            setUserData([])
          }
        }} 
        style={{opacity: index == 1 ? 0.5 : 1}}
        className='bg-amber-500 text-black rounded px-4 py-2 font-bold cursor-pointer active:scale-95'>Prev</button>
        <h4>Page {index}</h4>
        <button onClick={()=>{
          setindex(index+1)
          setUserData([])
        }} className='bg-amber-500 text-black rounded px-4 py-2 font-bold cursor-pointer active:scale-95'>Next</button>
      </div>
    </div>
  )
}

export default App
