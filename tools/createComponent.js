const fs = require('fs-extra')
const path = require('path')

/**
 * Usage:
 *
 * npm run create {ComponentName} {FeaturePath}
 *
 * @param {string} ComponentName - The name of the React component class to create
 * @param {string} FeaturePath (Optional) - Defaults to src/components if not provided.
 * This should be the name of the folder to place the component in inside src/features.
 */

const {index, style, spec} = require('./lib/templates')

if (process.argv.length <= 2) return

const componentName = process.argv[2]
const getFolderName = (name) => {
  return name[0].toLowerCase() + name.slice(1)
}

const isFeature = process.argv.length === 4

const defaultDir = path.join(__dirname, '../src')
const parentDir = isFeature
  ? path.join(defaultDir, 'features', process.argv[3])
  : path.join(defaultDir, 'components')
const componentDir = path.join(parentDir, getFolderName(componentName))

const writeItems = [
  {path: 'index.tsx', template: index},
  {path: 'style.ts', template: style},
  {path: 'spec.tsx', template: spec}
]

fs.ensureDirSync(componentDir)

writeItems.forEach((item) => {
  const contents = item.path === 'spec.tsx'
    ? item.template(componentName, isFeature)
    : item.template(componentName)
  const itemPath = path.join(componentDir, item.path)

  fs.writeFileSync(itemPath, contents)
})

console.log(`New Component ${componentName} created at: ${componentDir}`)
