import React, { Component } from 'react'

class ClassCounter2 extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0,
      name: ''
    }
  }

  componentDidMount = () => {
    document.title = `Cliked ${this.state.count} times`
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.count != this.state.count) {
      document.title = `Cliked ${this.state.count} times`
      console.log('ComponentDidUpdate render')
    }
  }

  render () {
    return (
      <div>
        <div>
          <label> Enter Name : </label>
          <input
            type='text'
            name='name'
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

export default ClassCounter2
