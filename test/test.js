var assert = require('assert');

function getParameterByName(name, url) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function hasQuery(url) {
  var posQuery = url.indexOf('?')
  var posHash = url.indexOf('#')
  if (posQuery === -1) {
    return false
  }
  if (posHash === -1 || posQuery < posHash) {
    return true
  }
  return false
}

function hasHash(url) {
  return url.indexOf('#') > -1
}

function getQuery(url) {
  if (!hasQuery(url)) return ''
  var start = url.indexOf('?')
  if (!hasHash(url)) {
    return url.substring(start)
  } else {
    var end = url.indexOf('#')
    return url.substring(start, end)
  }
}

function getHash(url) {
  if (!hasHash(url)) return ''
  var start = url.indexOf('#')
  return url.substring(start)
}

function getDomain(url) {
  if(hasQuery(url)) {
    var start = url.indexOf('?')
    return url.substring(start, -1)
  }
  if(hasHash(url)) {
    var start = url.indexOf('#')
    return url.substring(start, -1)
  }
  return url
}

function concatUrl(code, next) {
  const query = getQuery(next)
  const hash = getHash(next)
  const domain = getDomain(next)
  if(query) {
    return domain + query + '&code=' + code + hash
  } else {
    return domain + '?code=' + code + hash
  }
}

const url = 'xxx?code=123&next=abc?xxx=123'

const string1 = 'abc?xxx=123#abc'
const string2 = 'abc?xxx=123'
const string3 = 'abc#abc'

describe('# get parameters', function() {
  it('should return 123',function() {
    assert.equal('123', getParameterByName('code', url))
  }),
  it('should return abc', function () {
    assert.equal('abc?xxx=123', getParameterByName('next', url))
  }),
  it('hasQuery', function() {
    assert.equal(false, hasQuery('#?abc'))
  }),
  it('hasQuery', function () {
    assert.equal(false, hasQuery(string3))
  }),
  it('hasHash', function () {
    assert.equal(false, hasHash(string2))
  }),
  it('hasHash', function () {
    assert.equal(true, hasHash(string3))
  }),
  it('getString', function() {
    assert.equal('?xxx=123', getQuery(string1))
  }),
  it('getString', function() {
    assert.equal('?xxx=123', getQuery(string2))
  }),
  it('getString', function () {
    assert.equal('', getQuery('#?abc'))
  }),
  it('getHash', function() {
    assert.equal('#abc', getHash(string1))
  }),
  it('getHash', function () {
    assert.equal('', getHash(string2))
  }),
  it('getHash', function () {
    assert.equal('#abc', getHash(string3))
  }),
  it('concat', function() {
    assert.equal('abc?xxx=123&code=abc#1', concatUrl('abc', 'abc?xxx=123#1'))
  }),
  it('concat', function () {
    assert.equal('abc?xxx=123&code=abc', concatUrl('abc', 'abc?xxx=123'))
  }),
  it('concat', function () {
    assert.equal('abc?code=abc#1', concatUrl('abc', 'abc#1'))
  }),
  it('concat', function () {
    assert.equal('abc?code=abc', concatUrl('abc', 'abc'))
  })
})