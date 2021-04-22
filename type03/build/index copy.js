"use strict";
var Smartsorter = /** @class */ (function () {
    function Smartsorter(collection) {
        this.collection = collection;
    }
    Smartsorter.prototype.sort = function () {
        var lenght = this.collection.length;
        for (var i = 0; i < lenght; i++) {
            for (var j = 0; j < lenght - i - 1; j++) {
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                if (typeof this.collection === 'string') {
                }
            }
        }
    };
    return Smartsorter;
}());
var smSorter = new Smartsorter([10, 3, -5, 0]);
smSorter.sort();
console.log(smSorter.collection);
