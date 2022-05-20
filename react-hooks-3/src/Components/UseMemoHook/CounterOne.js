import { useState, useMemo } from 'react'

function CounterOne () {

  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  //Normal Function
  //-----------------
  // const isEven = () => {
  //   let i = 0
  //   while (i < 2000_000_000) i++
  //   console.log('executing while loop', i)
  //   return counterOne % 2 === 0
  // }

  //Memoized Version
  //-----------------
  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000_000_000) i++
    console.log('executing while loop', i)
    return counterOne % 2 === 0
  }, [counterOne])

  return (
    <div>
      <div>
        <button onClick={incrementOne}> CounterOne - {counterOne} </button>
        {/* <span> {isEven() ? 'Even' : 'Odd'} </span> */}
        <span> {isEven ? 'Even' : 'Odd'} </span>
      </div>

      <div>
        <button onClick={incrementTwo}> CounterTwo - {counterTwo} </button>
      </div>
    </div>
  )
}

export default CounterOne
