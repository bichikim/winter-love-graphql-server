import MongoDBOptions from './MongoDBOptions'

/**
 * bootstrap options
 */
export default interface Options {
  src?: string
  cwd?: string
  dateScalarMode?: 'timestamp' | 'isoDate'
  emitSchemaFile?: string
  playground?: boolean
  port?: string
  resolvers?: string
  mongoDB?: MongoDBOptions
  pubSub?: {
    redis?: boolean,
  }
}
