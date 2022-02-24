// four conditional rendering approaches :-
import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: true
    }
  }
  render () {
    //  approach-1 (if/else) :-
    //--------------------------
    // if(this.state.isLoggedIn){
    //     return <h1> Welcome Vishwas </h1>
    // } else{
    //     return <h1> Welcome Guest </h1>
    // }

    //approach-2(Element Variables) :-
    //---------------------------------
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <h1> Welcome Vishwas </h1>
    // } else {
    //   message = <h1> Welcome Guest </h1>
    // }
    // return message

    // approach-3 (Ternary Condtional Operator) :-
    //---------------------------------------------
    // return this.state.isLoggedIn ?
    //             <h1> Welcome Vishwas </h1> :
    //             <h1> Welcome Guest </h1>

    // approach-4 (Short Circuit Operator '&&') :-
    //-------------------------------------------
    return this.state.isLoggedIn && <h1> Welcome Vishwas </h1>
  }
}

export default UserGreeting

// beginning ka basic normal code
//----------------------------------
// return(
//     <div>
//         <h1> Hello Vishwas </h1>
//         <h1> Welcome Guest </h1>
//     </div>
// )
