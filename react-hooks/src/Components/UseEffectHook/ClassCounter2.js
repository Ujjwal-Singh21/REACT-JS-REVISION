// class counter for comparison with HookCounterTwo with useEffect().
// adding condition in componentDidUpdate() as log to console only when prev count
// and current count values aren't same.

import React, { Component } from 'react'

class ClassCounterTwo extends Component {
  constructor () {
    super()
    this.state = {
      count: 0,
      name: ' '
    }
  }

  componentDidMount () {
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.count !== this.state.count)
      console.log('updating class counter two')
    document.title = `Clicked ${this.state.count} times`
  }

  render () {
    return (
      <div>
        <div>
          <label> Name: </label>
          <input
            type='text'
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
          />
        </div>

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clicked {this.state.count} times
        </button>
      </div>
    )
  }
}

export default ClassCounterTwo
