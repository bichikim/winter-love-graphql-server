import {RedisPubSub} from 'graphql-redis-subscriptions'
import Redis, {RedisOptions} from 'ioredis'

const defaultEnv = {
  pubSubRedis: {
    host: '192.168.99.99',
    port: 6379,
    use: true,
  },
}

export default (): RedisPubSub => {
  const options: RedisOptions = {
    host: process.env.PUB_SUB_REDIS_HOST || defaultEnv.pubSubRedis.host,
    port: Number(process.env.PUB_SUB_REDIS_PORT) || defaultEnv.pubSubRedis.port,
    retryStrategy: (times) => Math.max(times * 100, 3000),
  }

  return new RedisPubSub({
    publisher: new Redis(options),
    subscriber: new Redis(options),
  })
}
