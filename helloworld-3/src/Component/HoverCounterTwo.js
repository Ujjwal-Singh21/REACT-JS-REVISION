//HoverCounter with render props approach 
//-----------------------------------------
import React, { Component } from 'react'

class HoverCounterTwo extends Component {
  render () {
    const { count, incrementCount } = this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount}> Hovered {count} times</h1>
      </div>
    )
  }
}

export default HoverCounterTwo





//   incrementCount = () => {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })

//     // this.setState({...this.state,
//     //     count: this.state.count + 1
//     //   })
//   }
