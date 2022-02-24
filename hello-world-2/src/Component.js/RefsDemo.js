// refs make it possible to access DOM node directly within React
// there are 2 approaches to create refs here in same code

import React, { Component } from 'react'

class RefsDemo extends Component {
  constructor () {
    super()
    this.inputRef = React.createRef()
    this.cbRef = null
    this.setCbref = (element) => {
      this.cbRef = element
    }
  }

  componentDidMount () {
    if (this.cbRef) {
      this.cbRef.focus()
    }

    // this.inputRef.current.focus()
    // console.log(this.inputref)
  }

  clickHandler = () => {
    alert(this.inputRef.current.value)
  }

  render () {
    return (
      <div>

        <h1> RefsDemo </h1>
        {/* <input type='text' ref={this.inputRef} /> */}

        {/* using older callback approach  */}
        <input type='text' ref={this.setCbref} />
        <button onClick={this.clickHandler}> Click </button>

      </div>
    )
  }
}

export default RefsDemo
