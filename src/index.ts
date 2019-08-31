import 'reflect-metadata'

import bootstrap from '@/bootstrap'
import {ServerInfo} from 'apollo-server'

bootstrap().then((serverInfo: ServerInfo) => {
  const {url} = serverInfo
  console.log(url)
})
