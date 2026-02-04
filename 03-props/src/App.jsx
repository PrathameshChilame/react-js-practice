import React from 'react'
import Card11 from './components/Card11';

const App = () => {
  return (
    <div className='parentcard'>
      <Card11 user='1Aman' age = {18}/>
      <Card11 user='Alen' age = {19}/>
      <Card11 user='Anna' age = {120}/>
      <Card11 user='John' age = {18}/>
      <Card11 user='Khaled' age = {18}/>
    </div>
  )
}

export default App
