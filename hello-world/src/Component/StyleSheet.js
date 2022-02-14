// using template literal to write multiple classNames at once
// can also use property 'classNames' instead if needed
import React from 'react'
import './myStyle.css'

function StyleSheet (props) {
  const className = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className = {`${className} font-xl`} > StyleSheet </h1>
    </div>
  )
}

export default StyleSheet
