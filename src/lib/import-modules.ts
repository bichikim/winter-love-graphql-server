import globby, {GlobbyOptions} from 'globby'
import {join} from 'path'

interface Options extends GlobbyOptions{
}
export default async (
  patterns: string[] | string,
  options: Options = {},
) => {
  const cwd = options.cwd || process.cwd()
  const paths: string[] = await globby(
    patterns,
    {...options, cwd},
    )
  return Promise.all(paths.map((path: string) => {
    return new Promise((resolve, reject) => {
      import(join(cwd, path)).then((result) => {
        resolve({
          filename: path,
          result,
        })
      }).catch((e) => (reject(e)))
    })
  }))
}
