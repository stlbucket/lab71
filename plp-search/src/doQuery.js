
const productsJson = require('./products.json')
async function doQuery (options) {
  const searchTerm = options.searchTerm || undefined
  const pageSize = options.pageSize || 3
  const totalPages = Math.ceil(productsJson.length / pageSize)
  const pageOffset = Math.min((options.pageOffset || 0), totalPages-1)

  const result = productsJson
    .filter(p => (!searchTerm || p.name.indexOf(searchTerm) > -1))
    .sort((a,b) => a.name < b.name ? -1 : 1)
    .slice((pageOffset*pageSize), (pageOffset*pageSize)+pageSize)
    
  return {
    products: result,
    totalPages: totalPages,
    pageOffset: pageOffset,
    pageSize: pageSize,
    searchTerm: searchTerm
  }
}
module.exports = doQuery