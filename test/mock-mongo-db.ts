import {MongoMemoryServer} from 'mongodb-memory-server'

const sMockMongoInfo = Symbol('mock-mongo-info')

export default () => {
  return global[sMockMongoInfo]
}

export const init = async () => {
  const mongoDB = new MongoMemoryServer()
  const url = await mongoDB.getUri()
  // if(!result){
  //   throw new Error('[mock-mongo-db] cannot start mongo memory server')
  // }
  global[sMockMongoInfo] = mongoDB
}

export const destroy = async () => {
  const mongoDB: MongoMemoryServer = global[sMockMongoInfo]
  if(mongoDB){
    await mongoDB.stop()
  }
}
