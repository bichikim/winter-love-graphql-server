import bootstrapDefineOptions from '@/bootstrap/define-options'

describe('bootstrap/define-options', function test() {
  it('should return options', function test() {
    const result = bootstrapDefineOptions()
    expect(result.resolvers).to.be.a('string')
    expect(result.emitSchemaFile).to.be.a('string')
    expect(result.port).to.be.a('string')
    expect(result.pubSub.redis).to.be.a('boolean')
    expect(result.playground).to.be.a('boolean')
    expect(result.mongoDB.schemas).to.be.a('string')
    expect(result.mongoDB.url).to.be.a('null')
    expect(result.cwd).to.be.a('string')
    expect(result.src).to.be.a('string')
    expect(result.dateScalarMode).to.equal('timestamp')
  })
})
