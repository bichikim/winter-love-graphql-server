export default function clearResolvers() {
  // init type-graphql hidden storage
  // mocha watch cannot reset global.TypeGraphQLMetadataStorage
  if(global.TypeGraphQLMetadataStorage){
    global.TypeGraphQLMetadataStorage.clear()
  }
}
