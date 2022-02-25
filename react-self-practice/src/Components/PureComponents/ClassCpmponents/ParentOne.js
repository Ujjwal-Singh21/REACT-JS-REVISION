import React, { Component } from 'react'
import ChildOne from './ChildOne'
import RegularOne from './RegularOne'

export class ParentOne extends Component {
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
          <RegularOne Name={Name} />
          <ChildOne Name={Name} />
        </div>
        
        <button onClick={() => clearInterval(this.interval)}>
          Clear Interval
        </button>
      </div>
    )
  }
}

export default ParentOne
