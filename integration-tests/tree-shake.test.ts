/* global jest, expect, describe, it, afterEach */

const fs = require('fs')
const path = require('path')

const evidence = require('../src/components/tree-shake-evidence').default
const bundlePath = path.join(__dirname, '../examples/webpack-4/dist/bundle.js')

describe('Tree shaking', () => {
  it('does not include unused export', async () => {
    const bundleContents = await new Promise((resolve, reject) => fs.readFile(bundlePath, (err: any, data: any) => {
      if (err) return reject(err)
      resolve(data.toString())
    }))
    expect(bundleContents).toBeTruthy()
    expect(bundleContents).toEqual(expect.not.stringContaining(evidence.test))
  })
})
