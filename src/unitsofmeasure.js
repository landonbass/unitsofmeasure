'use strict';

var UnitsOfMeasure = function () {
    this.types = [];
}, unitsOfMeasure = new UnitsOfMeasure();

UnitsOfMeasure.prototype.add = function (name, conversions) {
    this.types.push({
        name: name,
        conversions: conversions
    });
};

UnitsOfMeasure.prototype.clear = function () {
    this.types = [];
};

UnitsOfMeasure.prototype.new = function (unit, value) {
    return {
        unit:unit,
        value:value,
        Value: function () {
            return this.value;
        }
    };
};

UnitsOfMeasure.prototype.convert = function (object, unitName) {
	var unit;
	this.types.forEach(function (u) {
		if (u.name === unitName){
			unit = u;
		}
	});
	if (typeof(unit) === 'undefined') {
		throw 'unit not found';
	}
	
	var conversion;
	unit.conversions.forEach(function (c) {
		if (c[0] === object.name) {
			conversion = c;
		}
	});
	
	if (typeof(conversion) === 'undefined') {
		throw 'conversion not found';
	}
};

module.exports = unitsOfMeasure;