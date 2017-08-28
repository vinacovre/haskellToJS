var _ = require('underscore');

var arrIn = [1,2,3,3,4,5,6,5,6,7,8,9];

function even(num) {
    if (num % 2 == 0)
        return true;
    return false;
}

function odd(num) {
    return !even(num);
}


/**************************************************************
 * MEMBER in Haskell
        member :: Eq a => a -> [a] -> Bool
        member _ [] = False
        member x (y:ys) = x == y || member x ys
 */
function member(num) {
    return function (element) {
        return num == element;
    }
}
arrIn.map(member(10)).reduce((acc, curr) => acc || curr, false); // OR...
arrIn.map(member(3)).reduce(function(acc, curr) {return acc || curr;}, false);


/**************************************************************
 * LENGTH in Haskell
        length' :: [a] -> Int
        length' [] = 0
        length' (_:xs) = 1 + length' xs
 */
arrIn.reduce((acc, curr) => 1 + acc, 0);


/**************************************************************
 * TWICE in Haskell
        twice :: Num a => [a] -> [a]
        twice [] = []
        twice (x:xs) = (2 * x) : twice xs
 */
function twice() {
    return function(element) {
        return 2 * element;
    }
}
arrIn.map(twice());


/**************************************************************
 * REMOVE_FIRST in Haskell
        removeFirst :: Eq a => a -> [a] -> [a]
        removeFirst _ [] = []
        removeFirst x (y:ys) = if x == y
                                then ys
                                else y : removeFirst x ys
 */
function removeFirst(arrIn, item) {
    var index = arrIn.indexOf(item);
    if (index > -1) {
        arrIn.splice(index, 1);
    }
    return arrIn;
}
var result = removeFirst(arrIn, 3);
// result;


/**************************************************************
 * ALL_ODD in Haskell
        allOdd :: Integral a => [a] -> Bool
        allOdd [] = True
        allOdd (x:xs) = odd x && allOdd xs
 */
arrIn.reduce((acc, curr) => acc && odd(curr), true);
arrIn.reduce((acc, curr) => acc && curr % 2 != 0, true);


/**************************************************************
 * SOME in Haskell
        some :: (a -> Bool) -> [a] -> Bool
        some _ [] = False
        some y (x:xs) = y(x) || some y(xs)
 */
arrIn.reduce((acc, curr) => acc || even(curr), false); // is there an even number?
arrIn.reduce((acc, curr) => acc || odd(curr), false); // is there an odd number?


/**************************************************************
 * SUM in Haskell
        sum' :: Num a => [a] -> a
        sum' [] = 0;
        sum' (x:xs) = x + sum' xs
 */
arrIn.reduce((acc, curr) => acc + curr, 0);