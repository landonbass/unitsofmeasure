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

};

module.exports = unitsOfMeasure;