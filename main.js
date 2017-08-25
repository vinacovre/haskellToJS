/**
 * FUNCTIONAL PROGRAMMING WITH JAVASCRIPT
 * 
 * Converting Haskell to JS.
 * 
 * Inside node: .load main.js
 */

var _ = require('underscore');
var arrIn = [1,2,3,4,5,6,7,8,9];

// member :: Eq a => a -> [a] -> Bool
// member _ [] = False
// member x (y:ys) = x == y || member x ys
function member(element){
    return function (num) {
        return num == element;
    }
}
// const equal3 = member(3);
