import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

  const param = useParams()
  console.log(param); // this writes anything written after courses/abcd, itwrites params = abcd
  

  return (
    <div>
      <h1>{param.id} Course Details Page</h1>
    </div>
  )
}

export default CourseDetails
