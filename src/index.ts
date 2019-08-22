import context from '@/context'
import {ApolloServer} from 'apollo-server'
import {GraphQLSchema} from 'graphql'
import path from 'path'
import {buildSchema} from 'type-graphql'

interface Options {
  dateScalarMode?: 'timestamp' | 'isoDate'
  emitSchemaFile?: string
  playground?: boolean
}

async function bootstrap(options: Options = {}) {
  const {
    emitSchemaFile = path.resolve(process.cwd(), process.env.EMIT_SCHEMA_FILE || 'schema.gql'),
    dateScalarMode = 'timestamp',
    playground = process.env.NODE_ENV === 'development',
  } = options

  const schema: GraphQLSchema = await buildSchema({
    resolvers: [],
    emitSchemaFile,
  })

  const server = new ApolloServer({
    cors: {
      origin: true,
    },
    // @ts-ignore
    schema,
    context: context(),
    playground,
  })

  const {url} = await server.listen(process.env.PORT)
}

bootstrap()
