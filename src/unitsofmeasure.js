'use strict';

var Converters = function () {
    this.types = [];
}, converters = new Converters();

Converters.prototype.add = function (name, conversions) {
    this.types.push({
        name: name,
        conversions: conversions
    });
};

Converters.prototype.new = function (unit, value) {
    return {
        unit:unit,
        value:value,
        Value: function () {
            return this.value;
        }
    };
};


converters.add('f',['c',function(value){return value * 9/5 + 32;}]);

var temp = converters.new('f', 85);

console.log(temp.Value());