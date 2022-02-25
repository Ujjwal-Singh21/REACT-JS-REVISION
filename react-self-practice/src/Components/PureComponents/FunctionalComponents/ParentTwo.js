import React, { Component } from 'react'
import ChildTwo from './ChildTwo'
import RegularTwo from './RegularTwo'

export class ParentTwo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      Name: 'Steve'
    }
  }

  tick = () => {
    this.setState({
      Name: 'Steve'
    })
  }

  componentDidMount = () => {
    this.interval = setInterval(this.tick, 2000)
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  render () {
    console.log('***** Parent Component Render *****')
    const Name = this.state.Name
    return (
      <div>
        <div>
          <h4> Name : {Name} </h4>
          <RegularTwo Name={Name} />
          <ChildTwo Name={Name} />
        </div>

        <button onClick={() => clearInterval(this.interval)}>
          Clear Interval
        </button>
      </div>
    )
  }
}

export default ParentTwo
