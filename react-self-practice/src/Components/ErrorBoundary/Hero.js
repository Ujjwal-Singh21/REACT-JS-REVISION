import React from 'react'

function Hero ({ HeroName }) {
  if (HeroName == 'Joker') {
    throw new Error('Joker is a Villian, not a Hero')
  }

  return (
    <div>
      <h2> I am {HeroName} </h2>
    </div>
  )
}

export default Hero
