const doQuery = require('./doQuery')

async function runTest () {
  const result = doQuery({
    searchTerm: 'tree'
  })
  
  console.log(result)

  process.exit()
}

runTest()
