import 'reflect-metadata'
import {destroy as mongoDestroy, init as mongoInit} from './mock-mongo-db'

import mongoose from 'mongoose'
// import clearResolvers from './clear-resolvers'
const MAX_TIMEOUT = 500000

before(async function() {
  this.timeout(MAX_TIMEOUT)
  await mongoInit()
})

after(async function() {
  await mongoDestroy()
})
