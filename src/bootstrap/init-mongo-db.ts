import getFileName from '@/lib/get-file-name'
import importModules from '@/lib/import-modules'
import {camelCase, upperFirst} from 'lodash'
import {connect, model} from 'mongoose'
import MongoDBOptions from './MongoDBOptions'

export default async (options: Required<MongoDBOptions>) => {
  const modulesInfo = await importModules(options.schemas)
  modulesInfo.forEach(({path, result}) => {
    const name = getFileName(path)
    model(upperFirst(camelCase(name)), result.default)
  })

  if(!options.url){
    console.warn('[init-mongo-db] no url found')
    return
  }
  return connect(options.url, options.connect)
}
