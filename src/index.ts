import context from '@/context'
import importModules from '@/lib/import-modules'
import {ApolloServer} from 'apollo-server'
import {GraphQLSchema} from 'graphql'
import {RedisPubSub} from 'graphql-redis-subscriptions'
import Redis, {RedisOptions} from 'ioredis'
import path from 'path'
import 'reflect-metadata'
import {buildSchema} from 'type-graphql'

const defaultEnv = {
  pubSubRedis: {
    host: '192.168.99.99',
    port: 6379,
    use: true,
  },
}

interface Options {
  dateScalarMode?: 'timestamp' | 'isoDate'
  emitSchemaFile?: string
  playground?: boolean
  port?: string
}

const getRedisPubSub = () => {
  const options: RedisOptions = {
    host: process.env.PUB_SUB_REDIS_HOST || defaultEnv.pubSubRedis.host,
    port: Number(process.env.PUB_SUB_REDIS_PORT) || defaultEnv.pubSubRedis.port,
    retryStrategy: (times) => Math.max(times * 100, 3000),
  }

  return new RedisPubSub({
    publisher: new Redis(options),
    subscriber: new Redis(options),
  })
}

const bootstrap = async (options: Options = {}) => {
  const {
    emitSchemaFile = path.resolve(
      process.cwd(),
      process.env.EMIT_SCHEMA_FILE || 'schema.gql',
    ),
    dateScalarMode = 'timestamp',
    playground = process.env.NODE_ENV === 'development',
    port = process.env.PORT || '10004',
  } = options

  const schema: GraphQLSchema = await buildSchema({
    resolvers: (await importModules('src/resolvers/**/*Resolver.ts'))
    .map((item: any) => (item.result.default)),
    emitSchemaFile: './schema.gql',
    pubSub: process.env.PUB_SUB_REDIS === 'true' ? getRedisPubSub() : undefined,
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

  const {url} = await server.listen(port)
  return url
}

bootstrap().then((m) => {
  console.log(m)
})
