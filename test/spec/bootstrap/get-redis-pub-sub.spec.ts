import getRedisPubSub from '@/bootstrap/get-redis-pub-sub'
import {RedisPubSub} from 'graphql-redis-subscriptions'

describe('bootstrap/getRedisPubSub', function test() {
  it('should return RedisPubSub', function test() {
    const result = getRedisPubSub()
    expect(result).to.instanceof(RedisPubSub)
    result.close()
  })
})
