import React, { useState, useCallback } from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

function ParentComponent () {
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(15000)
  const title = 'UseCallBack Hook Demo'

  const IncrementAge = () => {
    setAge(age => age + 1)
  }

  const memoizedIncrementAge = useCallback(IncrementAge, [age])

  const IncrementSalary = () => {
    setSalary(salary => salary + 1000)
  }

  const memoizedIncrementSalary = useCallback(IncrementSalary, [salary])

  return (
    <div>
      <Title myTitle={title} />

      <Count text='Age' count={age} />
      <Button handleClick={memoizedIncrementAge}> Increment Age </Button>

      <Count text='Salary' count={salary} />
      <Button handleClick={memoizedIncrementSalary}> Increment Salary </Button>
    </div>
  )
}

export default ParentComponent
