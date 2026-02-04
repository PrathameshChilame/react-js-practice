import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 relative rounded-3xl overflow-hidden shrink-0'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <RightCardContent tag={props.tag} intro={props.intro} id={props.id}/>
    </div>
  )
}

export default RightCard
