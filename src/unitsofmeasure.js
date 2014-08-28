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

UnitsOfMeasure.prototype.new = function (unit, value) {
    return {
        unit:unit,
        value:value,
        Value: function () {
            return this.value;
        }
    };
};


unitsOfMeasure.add('f',['c',function(value){return value * 9/5 + 32;}]);

var temp = unitsOfMeasure.new('f', 85);

console.log(temp.Value());


module.exports = unitsOfMeasure;