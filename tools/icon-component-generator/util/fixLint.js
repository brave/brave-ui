// const standard = require('standard')

module.exports = function fixLint (data) {
  // TODO: support ts standard as straight js standard errors
  return Promise.resolve(data)
  // return new Promise((resolve, reject) => standard.lintText(data, { fix: true }, (err, standardData) => {
  //   if (err) {
  //     reject(err)
  //     return
  //   }
  //   if (!standardData || !standardData.results || !standardData.results.length) {
  //     reject(new Error('no results'))
  //     return
  //   }
  //   resolve(standardData.results[0].output)
  // }))
}
