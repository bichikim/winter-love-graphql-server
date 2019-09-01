import {config} from 'dotenv'
import 'reflect-metadata'

config({
  path: process.env.ENV_FILE,
})

import bootstrap from '@/bootstrap'
import {ServerInfo} from 'apollo-server'

bootstrap().then((serverInfo: ServerInfo) => {
  const {url} = serverInfo
  console.log(url)
})
