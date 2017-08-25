var _ = require('underscore');
var arrIn = [1,2,3,4,5,6,7,8,9];

/* Code in Haskell */
// member :: Eq a => a -> [a] -> Bool
// member _ [] = False
// member x (y:ys) = x == y || member x ys

function member(element) {
    return function (num) {
        return num == element;
    }
}

/* Map & Reduce */
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
 */
arrIn.map(member(3)).reduce(function(num) {return num == true;}, false);
arrIn.map(member(10)).reduce((num) => num || false, false);

// see following link to check why the above code is not working 
//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce