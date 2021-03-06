'use strict';
var chai = require('chai'),
	should = chai.should(),
	expect = chai.expect,
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
      it('has convert', function () {
	uom.should.have.property('convert');
  });
});

describe('types', function () {
  it('add type should add a type', function () {
	uom.clear();
	uom.add('f',['c',function(value){return value * 9/5 + 32;}]);
	uom.types.length.should.equal(1);
	//var temp = unitsOfMeasure.new('f', 85);

	//console.log(temp.Value());
  });
  
  it('add type should add multiple types', function () {
	uom.clear();
	uom.add('f',['c',function(value){return (value - 32)* 5/9;}]);
	uom.add('c',['f',function(value){return value * 9/5 + 32;}]);
	uom.types.length.should.equal(2);
  });
});

describe('convert', function () {
	it('should throw an expection when unit is not found', function () {
		uom.clear();
		uom.add('f',['c',function(value){return (value - 32)* 5/9;}]);
		expect(function(){uom.convert(null, 'abc')}).to.throw('unit not found');	
	});
});