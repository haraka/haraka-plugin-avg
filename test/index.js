const assert = require('node:assert/strict')
const { beforeEach, describe, it } = require('node:test')

const { makeConnection, makePlugin } = require('haraka-test-fixtures')

beforeEach(function () {
  this.plugin = makePlugin('avg', { register: false })
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
    this.connection = makeConnection()
    assert.ok(this.connection.server)
  })

  it('sets up a transaction', function () {
    this.connection = makeConnection({ withTxn: true })
    assert.ok(this.connection.transaction.header)
  })
})
