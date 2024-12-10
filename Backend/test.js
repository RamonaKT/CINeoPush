// test.js
const add = require('./app');
const assert = require('assert');

describe('Addition Tests', function () {
    it('should return 3 for 1 + 2', function () {
        assert.strictEqual(add(1, 2), 3);
    });

    it('should return -1 for 1 + -2', function () {
        assert.strictEqual(add(1, -2), -1);
    });
});
