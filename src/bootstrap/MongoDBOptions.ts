import {ConnectionOptions} from 'mongoose'

export default interface MongoDBOptions {
  url?: string | null,
  schemas?: string,
  connect?: ConnectionOptions
}
