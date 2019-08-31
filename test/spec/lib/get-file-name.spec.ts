import libGetFileName from '@/lib/get-file-name'

describe('lib/get-file-name', function test() {
  it('should get file name', function test() {
    const result = libGetFileName('src/path/my-file.ts', 'ts')
    expect(result).to.equal('my-file')
  })
})
