// HOC that adds additional functionality like counter and state

import React, { Component } from 'react'

const withCounter = (WrappedComponent, incrementByNo) => {
  class WithCounter extends Component {
    constructor (props) {
      super(props)
      this.state = {
        count: 0
      }
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + incrementByNo
        }
      })
    }

    render () {
      console.log(this.props.name)
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      )
    }
  }
  return WithCounter
}

export default withCounter
