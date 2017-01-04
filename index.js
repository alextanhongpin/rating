(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.wilsonRate = mod.exports;
  }
})(this, function (module) {
  "use strict";

  var mid = function mid(upvotes, downvotes) {
    var total = upvotes + downvotes;
    var up = upvotes / total;
    var half = .5;
    var a = total / (4 + total);
    var b = 4 / (4 + total);
    return a * up + b * half;
  };

  var average = function average(upvotes, downvotes) {
    var total = upvotes + downvotes;
    return upvotes / total;
  };

  var wilson = function wilson(upvotes, downvotes) {
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.644853;

    var n = upvotes + downvotes;
    var phat = upvotes / n;
    var lower = (phat + z * z / (2 * n) - z * Math.sqrt((phat * (1 - phat) + z * z / (4 * n)) / n)) / (1 + z * z / n);

    return lower;
  };

  function stars() {
    var ratings = [].concat(Array.prototype.slice.call(arguments));
    var step = 1 / (ratings.length - 1);

    var upvotes = ratings.map(function (value, index) {
      return value * (1 - index * step);
    }).reduce(function (prev, next) {
      return prev + next;
    }, 0);

    var downvotes = ratings.reverse().map(function (value, index) {
      return value * (1 - index * step);
    }).reduce(function (prev, next) {
      return prev + next;
    }, 0);

    return { upvotes: upvotes, downvotes: downvotes };
  }

  module.exports = {
    stars: stars,
    wilson: wilson,
    average: average,
    mid: mid
  };
});
