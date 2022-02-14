// creating our first functional component
// this functional component basically returns JSX (JavaScript Syntax Extension)
// JSX = (JavaScript + HTML)
import React from 'react'

// (eg-1) using normal JS function
// function Greet(){

//     return <h1>Hello , This is first Functional Component</h1>

// }

// (eg-2) using arrow function
var Greet = () => (
  <h1>Hello , This is first Functional Component using Arrow Function</h1>
)

// exporting it to import in App.js
export default Greet
