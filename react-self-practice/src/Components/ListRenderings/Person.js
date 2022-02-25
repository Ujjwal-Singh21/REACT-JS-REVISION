import React from 'react'

function Person ({ person }) {
  return (
    <div>
     <i> I am {person.Name}, my age is {person.Age} and my skill is {person.Skill} </i> 
    </div>
  )
}

export default Person
