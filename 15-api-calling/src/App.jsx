import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setdata] = useState([])

  async function getData1() {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
  }

  const getData2 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json()
    console.log(data);
  }

  const getData3 = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(response);
  }

  const getData4 = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setdata(response.data)    
  }


  return (
    <div>
      <button onClick={getData1}>Get Data1</button>
      <button onClick={getData2}>Get Data2</button>
      <button onClick={getData3}>Get Data3</button>
      <button onClick={getData4}>Get Data4</button>
      <div>
        {data.map(function(elem, idx) {
          return <h3>Hello, {elem.author}, {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
