// UpdatedComponent -> withCounter,
// NewComponent -> WithCounter
// OriginalComponent -> WrappedComponent,
import React, { Component } from 'react'

const withCounter = (WrappedComponent, value) => {
  class WithCounter extends Component {
    constructor (props) {
      super(props)

      this.state = {
        count: 0
      }
    }

    handleClick = () => {
      this.setState((prevCount) => {
        return {
          count: prevCount.count + value
        }
      })
    }

    render () {
      console.log(this.props.name)
      return (
        <WrappedComponent
          count={this.state.count}
          handleClick={this.handleClick}
          {...this.props}
        />
      )
    }
  }

  return WithCounter
}

export default withCounter
