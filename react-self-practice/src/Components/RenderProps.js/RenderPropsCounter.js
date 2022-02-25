import React, { Component } from 'react'

export class RenderPropsCounter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState(prevCount => {
      return {
        count: prevCount.count + 1
      }
    })
  }

  render () {
    return (
      <div>
         {/* {this.props.render(this.state.count, this.handleClick)}  */}
         {this.props.children(this.state.count, this.handleClick)} 
      </div>
    )
  }
}

export default RenderPropsCounter
