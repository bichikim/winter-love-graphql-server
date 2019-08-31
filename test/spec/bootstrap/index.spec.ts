import bootstrap, {stop} from '@/bootstrap'

describe('bootstrap', function test() {
  it('should run server', async function test() {
    const result = await bootstrap()
    expect(result.url).to.equal('http://localhost:10004/')
    await stop()
  })
})
