import globby, {GlobbyOptions} from 'globby'
import {join} from 'path'

interface ModuleInfo {
  path: string
  result: {
    default: any,
    [key: string]: any,
  }
}

interface Options extends GlobbyOptions{
}
export default async (
  patterns: string,
  options: Options = {},
): Promise<ModuleInfo[]> => {
  const cwd = options.cwd || process.cwd()
  const paths: string[] = await globby(
    patterns,
    {...options, cwd},
    )
  return Promise.all(paths.map((path: string) => {
    return new Promise<ModuleInfo>((resolve, reject) => {
      import(join(cwd, path)).then((result) => {
        resolve({
          path,
          result,
        })
      }).catch((e) => (reject(e)))
    })
  }))
}
