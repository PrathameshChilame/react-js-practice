import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-5 flex flex-nowrap gap-5 overflow-x-auto rounded-4xl'>
      {props.users.map(function(elem, idx){
        return <RightCard key={idx} img={elem.img} tag={elem.tag} intro={elem.intro} id={idx} />
      })}
    </div>
  )
}

export default RightContent
