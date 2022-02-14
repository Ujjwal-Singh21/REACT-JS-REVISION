import React, { Component, useContext } from 'react'
import { UserConsumer } from './Context'

function Employee () {
  const EmpID = useContext(UserConsumer)
  return (
    <div>
      <h1>Welcome to Employee Class</h1>
      <h4>Employee ID: {EmpID}</h4>
    </div>
  )
}

export default Employee

// class Employee extends Component {
//   render () {
//     return (
//       <UserConsumer>
//         {empid => {
//           return (
//             <div>
//               <h1>Welcome to Employee Class</h1>
//               <h4>Employee ID: {empid}</h4>
//             </div>
//           )
//         }}
//       </UserConsumer>
//     )
//   }
// }

// export default Employee
