import { Component } from 'react'

class ClassMouse extends Component {
  constructor () {
    super()

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

  componentDidMount () {
    window.addEventListener('mousemove', this.logMousePosition)
  }

  // for Unmounting
  //------------------
  componentWillUnmount () {
    window.removeEventListener('mousemove', this.logMousePosition)
  }

  render () {
    return (
      <div>
        ClassMouse : X - {this.state.x} Y - {this.state.y}
      </div>
    )
  }
}

export default ClassMouse
