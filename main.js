const _ = require('underscore');

var arrIn = [1,2,3,3,4,5,6,5,6,7,8,9];
var arrIn2 = [88,99,77,555];
var strIn = 'abcde';

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


/**************************************************************
 * COUNT in Haskell
        count :: Eq a => a -> [a] -> Integer
        count _ [] = 0
        count y (x:xs) = if y==x
                        then 1 + count y(xs)
                        else count y(xs)
 */
function isThere(value) {
    return function(element) {
        if(element == value)
            return true;
        return false;
    }
}
arrIn.map(isThere(6)).reduce((acc, curr) => acc + curr, false);


/**************************************************************
 * FILTER in Haskell
        filter' :: (a -> Bool) -> [a] -> [a]
        filter' _ [] = []
        filter' y (x:xs) = if y(x)
                            then x : filter' y(xs)
                            else filter' y(xs)
 */
arrIn.filter(odd);


/**************************************************************
 * STAMMER in Haskell
        stammer :: [a] -> [a]
        stammer [] = []
        stammer (x:xs) = x:x : stammer (xs)
 */
var arrRes = arrIn.map((curr) => [curr, curr]);
var arrRes = [].concat.apply([],arrRes); //flattening array
console.log(arrRes);
// OR...
arrIn.map((curr) => [curr, curr]).reduce((prev,curr) => prev.concat(curr));
// OR...
arrIn.map((curr) => [curr, curr]).flatten;


/**************************************************************
 * LIST_TAIL in Haskell
        listTail :: [a] -> Int -> [a]
        listTail (x:xs) cont = if (cont == 0)
                                then x:xs
                                else listTail xs (cont-1)
 */
//array.splice(start, numOfElementsToBeDeleted, insertionOfItem1, insertionOfItem2, ...)
arrIn.splice(0, 1);
arrIn;


/**************************************************************
 * ALTERNATE in Haskell
        alternate :: [a] -> [a]
        alternate [] = []
        alternate [z] = [z]
        alternate (x:y:xs) = y:x : alternate xs
 */
function alternate(arr) {
    var limit;
    odd(arr.length) ? limit = arr.length - 1 : limit = arr.length;
    for(var i = 0; i < limit; i += 2)
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
    return arr;
}


/**************************************************************
 * SORTED in Haskell
        sorted :: Ord a => [a] -> Bool
        sorted [] = True
        sorted [z] = True
        sorted (a:b:xs) = a < b && sorted (b:xs)
 */
// Last index out of array's range (becomes "undefined")
// arrIn.reduce((acc, curr, idx, arr) => acc && curr <= arr[idx+1], true);
function isSorted(arr) {
    for(var i = 1; i < arr.length; i++) {
        if(arr[i-1] > arr[i])
            return false;
    }
    return true;
}


/**************************************************************
 * ODDS in Haskell
        odds :: [a] -> [a]
        odds [] = []
        odds [z] = [z]
        odds (x:y:xs) = x : odds xs
 */
arrIn.filter((element, index) => odd(index));
// OR ...
arrIn.filter((element, index) => {
    if(odd(index))
        return element;
});
// filter returns an array with elements that passed the condition


/**************************************************************
 * UNIQUE in Haskell
        unique' :: Eq a => a -> [a] -> [a]
        unique' n [] = []
        unique' n (x:xs) = if n == x
                            then unique' n xs
                            else x : unique' x xs

        unique :: Eq a => [a] -> [a]
        unique [] = []
        unique (x:xs) = x : unique' x xs
 */
arrIn.filter((element, index, arr) => index == arr.indexOf(element));
// OR...
arrIn.filter((element, index, arr) => {
    if (index == arr.indexOf(element))
        return element;
});


/**************************************************************
 * MERGE in Haskell
        merge :: (Ord a) => [a] -> [a] -> [a]
        merge [] [] = []
        merge [] [a] = [a]
        merge (x:xs) (y:ys) = if x < y
                                then x:y : merge xs (y:ys)
                                else y:x : merge (x:xs) ys
 */
arrIn.concat(strIn);
arrIn.concat(arrIn2);


/**************************************************************
 * MY_MAX in Haskell
        myMax :: Ord a => [a] -> a
        myMax xs = myMax' xs (head xs)
        myMax' [] a = a
        myMax' (x:xs) a = if x > a
                        then myMax' xs x
                        else myMax' xs a
 */
arrIn.reduce((acc, curr) => {
    if(curr > acc)
        return curr;
    return acc;
}, -1);