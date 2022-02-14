// index as key Anti-pattern
// map() method takes index number as 2nd arg
import React from 'react'

function NameList3 () {
  const names = ['Bruce', 'Clarke', 'Diana']

  const nameList = names.map((name, index) => (
    <h1 key={index}>
      {index}
      {name}
    </h1>
  ))
  
  return <div> {nameList} </div>
}

export default NameList3
