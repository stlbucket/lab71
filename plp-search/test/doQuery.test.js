const assert = require('assert');

const doQuery = require('../src/doQuery')

describe('test', () => {
  it('should query without a searchterm', async () => {
    const result = await doQuery({
    })
    assert.equal(result.products.length, 3)
  });

  it('should query with a searchterm', async () => {
    const result = await doQuery({
      searchTerm: 'tree'
    })
    assert.equal(result.products.length, 1)
  });
});

