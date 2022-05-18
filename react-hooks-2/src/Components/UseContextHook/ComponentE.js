import { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserConsumer, ChannelConsumer } from './CreateContext'

function ComponentE () {

  const user = useContext(UserConsumer)
  const channel = useContext(ChannelConsumer)
  
  return (
    <div>
      <h1>
        Using useContext Hook - User - {user} : Channel - {channel}
      </h1>
      <ComponentF />
    </div>
  )
}

export default ComponentE
