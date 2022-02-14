// inline styling practice,
// create an object and pass it as a value to style attribute.
// In that object, key is camelCased and value is usually 'String'

function Inline () {

  // creating an object to pass to style attribute
  const Styling = {
    color: 'blue',
    fontSize: '72px'
  }

  return (
    <div>
      <h1 style={Styling}> Inline Styling </h1>

      {/* CHECKING REGULAR CSS CLASS DISADVANTAGES */}
      <h1 className='error'> regular style sheet ERROR </h1>
      
      {/* CAN'T DO SAME WITH CSS MODULES BECAUSE ITS CALLED USING VARIABLE */}
      {/* IF USED IT SAYS :- Line 16:22:  'styles' is not defined  no-undef */}
      {/* <h1 className={styles.success}>Css Modules SUCCESS</h1> */}
      
    </div>
  )
}

export default Inline
