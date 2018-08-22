const fs = require('mz/fs')
const path = require('path')

module.exports = async function findFilesRecursive (extension, dirPath) {
  let files = await fs.readdir(dirPath)
  let results = await Promise.all(files.map(async file => {
    const filePath = path.join(dirPath, file)
    // handle is match
    if (file.endsWith(`.${extension}`)) {
      return [filePath]
    }
    // handle dir
    const stat = await fs.stat(filePath)
    if (stat.isDirectory()) {
      return findFilesRecursive(extension, filePath)
    }
    // not match
    return []
  }))
  const result = []
  for (const arr of results) {
    result.push(...arr)
  }
  return result
}