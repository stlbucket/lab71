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
    const searchTerm = req.query.searchTerm
    doQuery(searchTerm)
      .then((searchResult) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          data: searchResult
        }))
      })
  }
}

module.exports = handler



