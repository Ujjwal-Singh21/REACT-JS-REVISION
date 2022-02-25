import React from 'react'
import Person from './Person'

function ObjectListRendering () {
  const persons = [
    {
      id: 1,
      Name: 'Bruce',
      Age: 27,
      Skill: 'React'
    },
    {
      id: 2,
      Name: 'Clarke',
      Age: 33,
      Skill: 'Angular'
    },
    {
      id: 3,
      Name: 'Diana',
      Age: 19,
      Skill: 'Vue'
    },
    {
      id: 4,
      Name: 'Tony',
      Age: 47,
      Skill: 'React Native'
    }
  ]

 const personList =  persons.map(person => <Person key={person.id} person={person}/>)

 return(
     <div>
         {personList}
     </div>
 )
}

export default ObjectListRendering
