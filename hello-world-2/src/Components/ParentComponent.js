import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'

// if we extends this parentcomp to pureComponent, it'll also stop re-rendering
class ParentComponent extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Vishwas'
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        name: 'Vishwas'
      })
    }, 2000)
  }

  render () {

    console.log('******Parent Component Render*******')

    return (
      <div>

        <h1> Parent Component </h1>

        {/* <RegularComponent name={this.state.name} /> */}

        {/* <PureComp name={this.state.name} /> */}

        <MemoComp name={this.state.name} />
        
      </div>
    )
  }
}

export default ParentComponent
