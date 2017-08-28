var _ = require('underscore');
/**
 * MAP
 *      input.map(function(arg));    OR...
 *      var result = _.map(input, function(args));
 * 
 * REDUCE
 *      input.reduce(function(memo, num), memo);
 *      var result = _.reduce.(input, function(memo, num) {return operation;}, memo);
 * 
 *      where memo is the initial state of the reduction (base value).
 *
 * SYNTAX OF THE REDUCE FUNCTION (https://goo.gl/1Ciwfi)

    [0, 1, 2, 3, 4].reduce(
      function (
        accumulator,
        currentValue,
        currentIndex,
        array
      ) {
        return accumulator + currentValue;
      }
    );
 */