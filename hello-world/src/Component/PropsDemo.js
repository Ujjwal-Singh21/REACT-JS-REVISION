import React from 'react'

// (eg-1) props are basically objects containing properties as (Key,Value) pairs
let Greetings = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroname}
        {props.children}
      </h1>
    </div>
  )
}

// (eg-2) destructuring props object in functional component
// method-1 (Destructuring In function parameter itself )
//---------------------------------------------------------
// const Greetings = ({name, heroname}) => {
//   // console.log({uname, props})
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroname}
//       </h1>
//     </div>
//   )
// }

// method-2 (Destructuring In function body before return statement )
//----------------------------------------------------------------------
// const Greetings = (props) => {
//   const {name,heroname} = props
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroname}
//       </h1>
//     </div>
//   )
// }

export default Greetings
