import React from 'react'
// <td> cannot appear as a child of <div>. hence use <React.Fragment> or <></>

function Column () {
  return (
    <>
      <td>Name</td>
      <td>Ujjwal</td>
    </>
  )
}

export default Column

// react fragments can pass key attribute only
// const items = ['Table', 'Ladder', 'Chair']
// <React.Fragment key={items}>
//   {items.map((items, index) => (
//     <React.Fragment>
//       {items}
//       <h1> Items </h1>
//       <p> {index} </p>
//     </React.Fragment>
//   ))}
