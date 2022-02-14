// taking a method as props from Parent Component also passing props from
// child to parent Component(Use arrow function to pass props)

function ChildComponent (props) {
  return (
    <div>
      <button onClick={() => props.clickHandler('Child')}> Greet Parent </button>
    </div>
  )
}

export default ChildComponent
