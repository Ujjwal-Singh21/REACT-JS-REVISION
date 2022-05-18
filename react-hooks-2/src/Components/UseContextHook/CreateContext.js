import React from 'react'

const userContext = React.createContext()
const channelContext = React.createContext()

const UserProvider = userContext.Provider
const UserConsumer = userContext.Consumer

const ChannelProvider = channelContext.Provider
const ChannelConsumer = channelContext.Consumer

export { UserProvider, UserConsumer, ChannelProvider, ChannelConsumer }
