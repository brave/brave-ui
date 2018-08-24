const fs = require('mz/fs')
const path = require('path')
const SVGO = require('svgo')
const svg2jsx = require('@balajmarius/svg2jsx')
const mkdirp = require('mkdirp-promise')
const { prettyPrint } = require('html')
const findFilesRecursive = require('./util/findFilesRecursive')
const fixLint = require('./util/fixLint')
const template = require('./template')
const svgoConfig = require('./svgoConfig')

const inputPath = path.resolve(process.argv[2])
const outputPath = path.resolve(process.argv[3])

const moduleExportLines = [ ]

function PascalCaseDashedString (dashedString) {
  dashedString = dashedString.replace(/-([a-z])/g, g => g[1].toUpperCase())
  return dashedString[0].toUpperCase() + dashedString.slice(1)
}

async function optimizeAndSave (filePath) {
  const data = await fs.readFile(filePath, 'utf8')
  const optimized = await svgo.optimize(data)
  const relativeFilePathNoExt = filePath.replace(inputPath, '').replace(path.extname(filePath), '')
  const savedRelativePath = relativeFilePathNoExt + '.tsx'
  const savedPathName = path.join(outputPath, savedRelativePath)
  await mkdirp(path.dirname(savedPathName))
  let transformed = prettyPrint(await svg2jsx(optimized.data))
  transformed = template.prefix + transformed.replace(/\"/g, `'`) + template.suffix + require('os').EOL
  transformed = await fixLint(transformed)
  // generate: export { default as CheckIcon }  from './check'
  moduleExportLines.push(`export { default as ${PascalCaseDashedString(path.basename(relativeFilePathNoExt))}Icon } from '.${relativeFilePathNoExt}'`)
  await fs.writeFile(savedPathName, transformed, 'utf8')
  return savedPathName
}

async function doScript () {
  console.log(`Finding SVG files to convert at path: "${inputPath}"`)
  const paths = await findFilesRecursive('svg', inputPath)
  console.log(`Found ${paths.length} files. Converting...`)
  const savedPaths = await Promise.all(paths.map(optimizeAndSave))
  console.log(savedPaths)
  for (const exportLine of moduleExportLines) {
    console.log(exportLine)
  }
}

doScript()

const svgo = new SVGO(svgoConfig)
