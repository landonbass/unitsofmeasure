'use strict';
var should = require('chai').should(),
    uom = require('../src/unitsofmeasure');

describe('properties', function () {
  it('has types', function () {
	uom.should.have.property('types');
  });
  it('has new', function () {
	uom.should.have.property('new');
  });
  it('has add', function () {
	uom.should.have.property('add');
  });
    it('has clear', function () {
	uom.should.have.property('clear');
  });
});

describe('types', function () {
  it('add type should add a type', function () {
	uom.add('f',['c',function(value){return value * 9/5 + 32;}]);
	uom.types.length.should.equal(1);
	//var temp = unitsOfMeasure.new('f', 85);

	//console.log(temp.Value());
  });
});