import {clone, trim} from 'lodash'
import Options from './Options'

const join = (...args: string[]) => {
  return args.map((arg: string) => (trim(arg, '/'))).join('/')
}

export default (options: Options = {}): Required<Options> => {
  const {
    src = process.env.SRC || 'src',
    cwd = process.cwd(),
  } = options
  // define options
  const {
    emitSchemaFile = join(
      cwd,
      process.env.EMIT_SCHEMA_FILE || 'schema.gql',
    ),
    dateScalarMode = 'timestamp',
    playground = process.env.NODE_ENV === 'development',
    port = process.env.PORT || '10004',
    resolvers = join(src, 'resolvers/**/*Resolver.ts'),
    pubSub: {
      redis: pubSubRedis = process.env.PUB_SUB_REDIS === 'true',
    } = {},
    mongoDB: {
      url: mongoDBUrl = process.env.MONGODB_URL,
      schemas: mongoDBSchemas
        = process.env.MONGODB_SCHEMAS || join(src, 'mongoose/**/*.ts'),
    } = {},
  } = options

  return {
    emitSchemaFile,
    dateScalarMode,
    playground,
    port,
    resolvers,
    pubSub: {
      redis: pubSubRedis,
    },
    cwd,
    mongoDB: {
      url: mongoDBUrl,
      schemas: mongoDBSchemas,
    },
    src,
  }
}
