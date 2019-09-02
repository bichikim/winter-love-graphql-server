import initMongoDB from '@/bootstrap/init-mongo-db'
import {models} from 'mongoose'

describe('bootstrap/initMongoDB', function test() {
  it('should register all schema', async function test() {
    await initMongoDB({
      url: '',
      schemas: 'test/mock/bootstrap/init-mongo-db',
      connect: {},
    })
    expect(Object.keys(models)).to.include('Foo')
    expect(Object.keys(models)).to.include('Bar')
  })
})
