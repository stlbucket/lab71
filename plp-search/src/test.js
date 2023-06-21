const doQuery = require('./doQuery')

async function runTest () {
  const result = doQuery({
    // searchTerm: 'fff'
  })
  
  console.log(result)

  process.exit()
}

runTest()
