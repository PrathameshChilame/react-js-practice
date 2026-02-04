import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, fugiat.', 
      tag:'Underbanged' 
    },
    {
      img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, fugiat.', 
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, fugiat.', 
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, fugiat.', 
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, fugiat.', 
      tag:'Underserved'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
