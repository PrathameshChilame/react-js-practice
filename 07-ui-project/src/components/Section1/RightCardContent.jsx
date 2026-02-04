import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-bold'>{props.id+1}</h2>
        <div>
          <p className='text-xl leading-relaxed text-white mb-14'>{props.intro}</p>
          <div className='flex justify-between'>
            <button className='bg-blue-500 text-white font-bold px-5 py-2 rounded-full text-lg'>{props.tag}</button>
            <button className='bg-blue-500 text-white font-bold px-5 py-2 rounded-full text-lg'><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
