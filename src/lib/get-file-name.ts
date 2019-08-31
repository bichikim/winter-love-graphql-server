export default (path: string, ext: string = 'ts'): string => {
  const result = path.match(new RegExp(`([a-z]|[A-Z]|-)+.${ext}$`))
  if(result){
    return result[0].split('.')[0]
  }
  return ''
}
