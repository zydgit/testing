const {add, mul} = require('../src/math')

// nodeJS内置的断言
// const assert = require('assert')
// assert.equal(add(2, 3), 6, '出错就显示')


// chaijs.com
const {should, expect, assert} = require('chai')

should();
add(2, 3).should.equal(5);
expect(add(2, 3)).to.be.equal(5);
assert.equal(add(2,3), 5);