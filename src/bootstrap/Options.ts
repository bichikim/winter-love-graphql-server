import MongoDBOptions from './MongoDBOptions'

interface PubSubOptions {
  redis?: boolean,
}

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

export interface RequiredOptions extends Required<Options>{
  mongoDB: Required<MongoDBOptions>
  pubSub: Required<PubSubOptions>
}
