import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arraw from './Arraw'


const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between wrap-break-word'>
      <HeroText/>
      <Arraw/>
    </div>
  )
}

export default LeftContent
