import {init as mongoInit} from './mock-mongo-db'

import mongoose from 'mongoose'
// import clearResolvers from './clear-resolvers'

before(async function() {
  await mongoInit()
})
