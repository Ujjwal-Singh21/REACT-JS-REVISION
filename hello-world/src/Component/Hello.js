// with and without JSX

import React from 'react'

// with JSX
// let Hello = () => {
//   return (
//     <div className = 'dummy class'>
//       <h1>Hello User JSX 1</h1>
//     </div>
//   )
// }

// withous JSX
let Hello = () => {
  return React.createElement(
    'div',
    { id: 'hello', className: 'dummy class' },
    React.createElement('h1', null, 'Hello user JSX 2')
  )
}

export default Hello
