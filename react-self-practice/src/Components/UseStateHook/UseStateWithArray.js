import React, { useState } from 'react'

const initialState = []
function UseStateWithArray () {
  const [items, setItems] = useState(initialState)

  const additems = () => {
    setItems(
        [...items,
         {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
         }
    ])
  }

  return (
    <div>
      <button onClick={additems}> Add Items </button>

      {
         items.map((item) => <li key={item.id}> {item.value} </li>)
      }
    </div>
  )
}

export default UseStateWithArray
