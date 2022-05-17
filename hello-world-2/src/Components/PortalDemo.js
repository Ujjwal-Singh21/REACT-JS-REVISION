// Creating a functional component and mounting its jsx
// <div> <h1>Portal Demo</h1> </div> to 'portal-root' DOM node instead
// of the regular 'root' DOM node.
// Don't forget to import ReactDOM from 'react-dom'
// two  parameters will passed to this ReactDOM.createPortal() method
// 1) JSX u wanna return.
// 2) DOM node to mount the element to.
//--------------------------------------------------------------------------------
import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo () {
  return ReactDOM.createPortal(
    <div>
      <h1> Portal Demo </h1>
    </div>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo
