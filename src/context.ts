import {ValueOrPromise} from 'apollo-server-types'

interface Context {
}

const readContext = <C = any>(context: C): Context => (context)

export default <O = any>(options?: O): ValueOrPromise<Context> => {
  return readContext(options)
}
