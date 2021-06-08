const fs = require('mz/fs')
const path = require('path')
const { optimize } = require('svgo')
const mkdirp = require('mkdirp')
const { prettyPrint } = require('html')
const findFilesRecursive = require('./util/findFilesRecursive')
const fixLint = require('./util/fixLint')
const template = require('./template')
const spriteTemplate = require('./spriteTemplate')
const svgoConfig = require('./svgoConfig')

const inputPath = path.resolve(process.argv[2])
const outputPath = path.resolve(process.argv[3])

const moduleExportLines = [ ]

function PascalCaseDashedString (dashedString) {
  dashedString = dashedString.replace(/(\_|\-)([a-z])/g, g => g[1].toUpperCase())
  return dashedString[0].toUpperCase() + dashedString.slice(1)
}

function camelCaseString (string) {
  return string
    .replace("_", "-")
    .replace(/(\S)([A-Z])/, "$1-$2")
    .toLowerCase()
}

async function optimizeAndSave (filePath) {
  const data = await fs.readFile(filePath, 'utf8')
  const optimized = await optimize(data, svgoConfig)
  const relativeFilePathNoExt = filePath.replace(inputPath, '').replace(path.extname(filePath), '')
  const savedRelativePath = relativeFilePathNoExt + '.tsx'
  const savedPathName = path.join(outputPath, savedRelativePath)
  await mkdirp(path.dirname(savedPathName))
  let transformed = optimized.data
  transformed = transformed.replace(/(import|export).*?;/g, "")
  transformed = prettyPrint(transformed)
  transformed = template.prefix + transformed.replace(/\"/g, `'`) + template.suffix + require('os').EOL
  transformed = await fixLint(transformed)
  // generate: export { default as CheckIcon }  from './check'
  moduleExportLines.push(`export { default as ${PascalCaseDashedString(path.basename(relativeFilePathNoExt))}Icon } from '.${relativeFilePathNoExt}'`)
  await fs.writeFile(savedPathName, transformed, 'utf8')
  return savedPathName
}

async function generateSprite (filePaths) {
  const { plugins, ...initialConfig } = svgoConfig;

  const symbols = await Promise.all(filePaths.map(async filePath => {
    const data = await fs.readFile(filePath, 'utf8')
    
    const relativeFilePathNoExt = `${filePath.replace(inputPath, '').replace(path.extname(filePath), '')}Icon`
    const iconName = camelCaseString(path.basename(relativeFilePathNoExt))

    const config = { ...initialConfig, plugins: [...plugins, 'removeXMLNS'] }
    const optimized = await optimize(data, { ...config })
    const symbol = optimized.data
      .replace("<svg", `<symbol id="${iconName}"`)
      .replace("</svg>", "</symbol>")
    return symbol
  }));

  const spriteSVG = `<svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;position:absolute;">
  ${symbols.join(require('os').EOL)}
</svg>`

  const removeUselessDefsIdx = plugins.indexOf('removeUselessDefs')
  const spritePlugins = [...plugins].splice(removeUselessDefsIdx, 1)
  const config = { ...initialConfig, plugins: spritePlugins }
  const optimizedSprite = optimize(spriteSVG, config)
  const spriteFile = spriteTemplate.prefix + optimizedSprite.data + spriteTemplate.suffix

  const spriteFilePath = "../../stories/components/icons/brave-icons-svg.js"
  await fs.writeFile(spriteFilePath, spriteFile, 'utf8')
}

async function doScript () {
  console.log(`Finding SVG files to convert at path: "${inputPath}"`)
  const paths = await findFilesRecursive('svg', inputPath)
  console.log(`Found ${paths.length} files. Converting...`)
  const savedPaths = await Promise.all(paths.map(optimizeAndSave))
  console.log(savedPaths)

  await generateSprite(paths);

  for (const exportLine of moduleExportLines) {
    console.log(exportLine)
  }
}

doScript()