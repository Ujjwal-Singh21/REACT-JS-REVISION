// creating our first class component
// class component means ES6 classes
// always extend a class component to React Component Class
// always implement render() method in a class component
//---------------------------------------------------------------
import { Component } from 'react'

class Welcome extends Component {
  render () {
    const { name, heroname } = this.props
    // const {state1, state2} = this.state
    return (
      <h1>
        Hello {name} a.k.a {heroname}
      </h1>
    )
  }
}

// destructuring props and state in class

export default Welcome
