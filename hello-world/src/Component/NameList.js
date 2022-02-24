import React from 'react'

function NameList () {
  const names = ['Bruce', 'Clark', 'Diana']

  // approach-3 using map() outside return method
  const nameList = names.map((name) => <h1> {name} </h1>)
  return <div> {nameList} </div>

  // very normal approach -1 :-
  //-----------------------------
  // return(
  //     <div>
  //         <h1> {names[0]} </h1>
  //         <h1> {names[1]} </h1>
  //         <h1> {names[2]} </h1>
  //     </div>
  // )

  // approach-2 using map() to itertate and return new array :-
  //------------------------------------------------------------
  // return(
  //     <div>
  //         {
  //             names.map((name) => <h1 key={name}> {name} </h1>)
  //         }
  //     </div>
  // )
}

export default NameList
