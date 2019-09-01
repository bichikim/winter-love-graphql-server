import 'reflect-metadata'
import clearResolvers from './clear-resolvers'
import clearSchemas from './clear-schemas'
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
  clearResolvers()
  clearSchemas()
})
