import importModules from '@/lib/import-modules'

describe('lib/import-modules', function test() {
  it('should import modules', async function test() {
    const result = await importModules(
      'test/mock/lib/import-modules/**/*.ts',
      )
    expect(result).to.deep.equal([
      {
        path: 'test/mock/lib/import-modules/bar.ts',
        result: {default: 'bar'},
      },
      {
        path: 'test/mock/lib/import-modules/foo.ts',
        result: {default: 'foo'},
      },
      {
        path: 'test/mock/lib/import-modules/john.ts',
        result: {default: 'john'},
      },
    ])
  })
})
