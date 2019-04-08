'use strict';

const standardTests = require('passwordless-tokenstore-test');
const mysql = require('mysql');

const MySQLStore = require('../');
const connUrl = 'mysql://test@localhost/test';

function TokenStoreFactory() {
  return new MySQLStore(connUrl);
}

const beforeEachTest = function (done) {
  done();
}

const afterEachTest = function (done) {
  done();
}

// Call the test suite
standardTests(TokenStoreFactory, beforeEachTest, afterEachTest);

describe('MySQLStore', function () {

  beforeEach(function (done) {
    beforeEachTest(done);
  });

  afterEach(function (done) {
    afterEachTest(done);
  });

});