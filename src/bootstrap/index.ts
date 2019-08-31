import context from '@/context'
import importModules from '@/lib/import-modules'
import {ApolloServer, ServerInfo} from 'apollo-server'
import {GraphQLSchema} from 'graphql'
import {join} from 'path'
import {buildSchema} from 'type-graphql'
import defineOptions from './define-options'
import getRedisPubSub from './get-redis-pub-sub'
import Options from './Options'

let server: ApolloServer
let serverInfo: ServerInfo

export default async (options: Options = {}): Promise<ServerInfo> => {
  if(server){
    console.warn(`[bootstrap] there is a server ${serverInfo.url} already`)
    return serverInfo
  }

  const {
    playground,
    dateScalarMode,
    pubSub,
    port,
    emitSchemaFile,
    resolvers,
    cwd,
  } = defineOptions(options)

  console.log(join(cwd, resolvers))

  // create new graphql schema by Type Graphql
  const schema: GraphQLSchema = await buildSchema({
    resolvers: (await importModules(resolvers))
      .map((item: any) => (item.result.default)),
    emitSchemaFile,
    dateScalarMode,
    pubSub: pubSub.redis ? getRedisPubSub() : undefined,
  })

  // create new ApolloServer
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
  if(server){
    await server.stop()
  }
}
