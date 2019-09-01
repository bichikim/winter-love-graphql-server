import {models} from 'mongoose'

export default function clearSchemas() {
  Object.keys(models).forEach((name) => {
    delete models[name]
  })
}
