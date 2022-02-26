import React, { Component } from 'react'

class ClassMouse extends Component {
  constructor (props) {
    super(props)

    this.state = {
      x: 0,
      y: 0
    }
  }

  logMousePosition = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  componentDidMount = () => {
    window.addEventListener('mousemove', this.logMousePosition)
  }

  componentWillUnmount = () => {
    window.removeEventListener('mouseMove', this.logMousePosition)
  }

  render () {
    const { x, y } = this.state
    return (
      <div>
        <h3>
          ClassMouse - X Value {x} , Y Value {y}
        </h3>
      </div>
    )
  }
}

export default ClassMouse
