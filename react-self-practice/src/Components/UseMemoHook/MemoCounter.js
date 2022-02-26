import React, { useState, useMemo } from 'react'

function MemoCounter () {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const handleCounterOne = () => {
    setCountOne(count => count + 1)
  }

  const handleCounterTWo = () => {
    setCountTwo(count => count + 1)
  }

  const isEven = () => {
    let i = 0
    while (i < 2000000000) 
    i++
    return countOne % 2 === 0
  }

  const memoizedIsEven = useMemo(isEven, [countOne])

  return (
    <div>
      <div>
        <button onClick={handleCounterOne}> CounterOne - {countOne} </button> <br />
        {/* <span>{isEven() ? 'Even' : 'Odd'} </span> */}
        <span>{ memoizedIsEven ? 'Even' : 'Odd' } </span>
      </div> <br />

      <div>
        <button onClick={handleCounterTWo}> CounterTwo {countTwo} </button>
      </div>
    </div>
  )
}

export default MemoCounter
