import React, { PureComponent } from 'react'

export class ChildOne extends PureComponent {
  render() {
    console.log('PureComponent Component Render')
    return (
      <div> Pure Component </div>
    )
  }
}

export default ChildOne