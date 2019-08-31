import getFileName from '@/lib/get-file-name'
import importModules from '@/lib/import-modules'
import {upperFirst} from 'lodash'
import {model, Schema} from 'mongoose'
import MongoDBOptions from './MongoDBOptions'

export default async (options: Required<MongoDBOptions>) => {
  const modulesInfo = await importModules(options.schemas)
  modulesInfo.forEach(({path, result}) => {
    const name = getFileName(path)
    model(upperFirst(name), result.default)
  })
}
