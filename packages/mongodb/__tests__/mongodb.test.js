'use strict';

const mongodb = require('..');
const assert = require('assert').strict;

assert.strictEqual(mongodb(), 'Hello from mongodb');
console.info('mongodb tests passed');
