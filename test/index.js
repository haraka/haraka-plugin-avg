const assert = require('node:assert/strict')
const { beforeEach, describe, it } = require('node:test')

// npm modules
const fixtures = require('haraka-test-fixtures')

beforeEach(function () {
  this.plugin = new fixtures.plugin('avg')
})

describe('avg', function () {
  it('loads', function () {
    assert.ok(this.plugin)
  })
})

describe('load_avg_ini', function () {
  it('loads avg.ini from config/avg.ini', function () {
    this.plugin.load_avg_ini()
    assert.ok(this.plugin.cfg)
  })
})

describe('uses text fixtures', function () {
  it('sets up a connection', function () {
    this.connection = fixtures.connection.createConnection({})
    assert.ok(this.connection.server)
  })

  it('sets up a transaction', function () {
    this.connection = fixtures.connection.createConnection({})
    this.connection.transaction = fixtures.transaction.createTransaction({})
    assert.ok(this.connection.transaction.header)
  })
})
