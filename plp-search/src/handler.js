const doQuery = require('./doQuery')

const handler = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
    const options = req.query
    // const searchTerm = req.query.searchTerm
    // const pageOffset = req.query.pageOffset
    // const pageSize = req.query.pageSize
    // const sortKey = req.query.sortKey
    // const sortDirection = req.query.sortDirection

    
    doQuery(options)
      .then((searchResult) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          data: searchResult
        }))
      })
      .catch(e => {
        res.status(400).send({
          message: e.toString()
        })
      })
  }
}

module.exports = handler



