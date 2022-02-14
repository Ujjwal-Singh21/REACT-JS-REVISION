import React from 'react'
import { UserConsumer, ChannelConsumer } from './CreateContext'

function ComponentF () {
  return (
    <div>
      <UserConsumer>
        {(user) => {
          return (
            <ChannelConsumer>
              {(channel) => {
                return (
                  <h1>
                    using normal approach -  User - {user} : Channel - {channel}
                  </h1>
                )
              }}
            </ChannelConsumer>
          )
        }}
      </UserConsumer>
    </div>
  )
}

export default ComponentF
