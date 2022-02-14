import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
  // using destructuring
  const { userId } = useParams()
  // without destructuring
  // const params = useParams()
  // const userId = params.userID
  return (
    <div>
      <h1> Displaying User Detais {userId} </h1>
    </div>
  )
}

// for video no 11
//------------------------
 // using destructuring
//  const { userId } = useParams()
 // without destructuring
 // const params = useParams()
 // const userId = params.userID
//  return (
//    <div>
//      <h1> Displaying User Detais {userId} </h1>
//    </div>
//  )
