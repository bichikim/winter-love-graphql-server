import context from '@/context'
import {authCheckerFactory} from '@/lib/auth-checker'
import importModules from '@/lib/import-modules'
import {ApolloServer, ServerInfo} from 'apollo-server'
import {buildSchema} from 'type-graphql'
import defineOptions from './define-options'
import getRedisPubSub from './get-redis-pub-sub'
import initMongoDB from './init-mongo-db'
import Options from './Options'

let server: ApolloServer
let serverInfo: ServerInfo

export default async (options: Options = {}): Promise<ServerInfo> => {
  if(server) {
    console.warn(`[bootstrap] there is a server ${serverInfo.url} already`)
    return serverInfo
  }

  const promises: Array<Promise<any>> = []

  const {
    playground,
    dateScalarMode,
    pubSub,
    port,
    emitSchemaFile,
    resolvers,
    cwd,
    mongoDB,
  } = defineOptions(options)

  // create new graphql schema by Type Graphql
  promises.push(buildSchema({
    resolvers: (await importModules(resolvers))
    .map((item: any) => (item.result.default)),
    emitSchemaFile,
    dateScalarMode,
    authChecker: authCheckerFactory(),
    pubSub: pubSub.redis ? getRedisPubSub() : undefined,
  }))

  promises.push(initMongoDB(mongoDB))

  const [schema] = await Promise.all(promises)

  // create new ApolloServer
  // eslint-disable-next-line require-atomic-updates
  server = new ApolloServer({
    cors: {
      origin: true,
    },
    // @ts-ignore
    schema,
    context: context(),
    playground,
  })

  // start apollo server
  serverInfo = await server.listen(port)

  return serverInfo
}

export const stop = async () => {
  if(server) {
    await server.stop()
  }
}
