'use strict';
var should = require('chai').should(),
    uom = require('../src/unitsofmeasure');

describe('properties', function () {
  it('has types', function () {
	uom.should.have.property('types');
  });
});