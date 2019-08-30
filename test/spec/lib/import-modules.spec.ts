import importModules from '@/lib/import-modules'

describe('lib/import-modules', function test() {
  it('should import modules', async function test() {
    const result = await importModules(
      'test/mock/lib/import-modules/**/*.ts',
      )
    expect(result).to.deep.equal([
      {
        filename: 'test/mock/lib/import-modules/bar.ts',
        result: {default: 'bar'},
      },
      {
        filename: 'test/mock/lib/import-modules/foo.ts',
        result: {default: 'foo'},
      },
      {
        filename: 'test/mock/lib/import-modules/john.ts',
        result: {default: 'john'},
      },
    ])
  })
})
