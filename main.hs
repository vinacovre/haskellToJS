-- VERSAO COMPLETA
-- Vinicius Covre de Assis - LPNC (Noturno) - Unesp Rio Claro

module Main where

member :: Eq a => a -> [a] -> Bool
member _ [] = False
member x (y:ys) = x == y || member x ys

length' :: [a] -> Int
length' [] = 0
length' (_:xs) = 1 + length' xs

-- twice [4, 6, 0, 8, -2, 3, 7, 5]  >>> [8, 12, 0, 16, -4, 6, 14, 10]
twice :: Num a => [a] -> [a]
twice [] = []
twice (x:xs) = (2 * x) : twice xs

-- removeFirst 'b' ['a', 'b', 'c', 'b', 'd', 'e' ] >>> ['a', 'c', 'b', 'd', 'e']
removeFirst :: Eq a => a -> [a] -> [a]
removeFirst _ [] = []
removeFirst x (y:ys) = if x == y
                        then ys
                        else y : removeFirst x ys

-- allOdd [1, 7, 3, 17, 11] >>> True
-- allOdd [1, 7, 3, 17, 11, 2] >>> False
-- Dica: existe o predicado odd; experimente odd 3  e odd 4
allOdd :: Integral a => [a] -> Bool
allOdd [] = True
allOdd (x:xs) = odd x && allOdd xs

-- andMap odd [1, 7, 3, 17, 11] >>> True
-- andMap even [2, 6, 10, 17, 0] >>> False
-- Dica: é uma adaptação pontual de allOdd
andMap :: (a -> Bool) -> [a] -> Bool
andMap _ [] = True
andMap y (x:xs) = y(x) && andMap y(xs)

-- some even [1, 7, 3, 17, 11] >>> False
-- some odd [2, 10, 5] >>> True
-- DEFINITION: is there some even/odd in [list] ?
some :: (a -> Bool) -> [a] -> Bool
some _ [] = False
some y (x:xs) = y(x) || some y(xs)

-- sum [1, 7, 3, 17, 11]  >>> 39
sum' :: Num a => [a] -> a
sum' [] = 0;
sum' (x:xs) = x + sum' xs

-- count 'b' ['a', 'b', 'c', 'b', 'd', 'b', 'e'] >>> 3
-- count 1 [1,2,1,3,4,1,5,1] >>> 4
count :: Eq a => a -> [a] -> Integer
count _ [] = 0
count y (x:xs) = if y==x
                  then 1 + count y(xs)
                  else count y(xs)

-- map' succ [10, 20, 30]  >>> [11, 21, 31]
-- Dica: adapte twice
map' :: (a -> b) -> [a] -> [b]
map' _ [] = []
map' y (x:xs) = y(x) : map' y(xs)

-- filter' odd [1, 2, 3, 4] >>> [1, 3]
filter' :: (a -> Bool) -> [a] -> [a]
filter' _ [] = []
filter' y (x:xs) = if y(x)
                    then x : filter' y(xs)
                    else filter' y(xs)

-- ==========
--  2a parte

-- stammer ['a', 'b', 'c', 'd']  >>> ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd']
--        reads ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd'] as string and shows "aabbccdd"
-- stammer [1,2,3,4] >>> [1,1,2,2,3,3,4,4]
-- dica: usar o operador : (cons) duas vezes
stammer :: [a] -> [a]
stammer [] = []
stammer (x:xs) = x:x : stammer (xs)

-- listRef ['a', 'b', 'c', 'd', 'e'] 0 >>> 'a'
-- listRef ['a', 'b', 'c', 'd', 'e'] 3 >>> 'd'
-- dicas: na recursão, a lista e a posição devem "diminuir" juntas;
--        lembre-se que o único elemento visível é o primeiro elemento
listRef :: [a] -> Int -> a
-- listRef = undefined -- não precisa fazer o caso vazio!!
listRef (x:xs) cont = if (cont == 0)
                        then x
                        else listRef xs (cont-1)

-- listTail ['a', 'b', 'c', 'd', 'e'] 0 >>> ['a', 'b', 'c', 'd', 'e']
-- listTail ['a', 'b', 'c', 'd', 'e'] 3 >>> ['d', 'e']
-- dica: basta uma pequena modificação em listRef
listTail :: [a] -> Int -> [a]
listTail (x:xs) cont = if (cont == 0)
                        then x:xs
                        else listTail xs (cont-1)

-- alternate ['a', 'b', 'c', 'd', 'e', 'f'] >>> ['b', 'a', 'd', 'c', 'f', 'e']
-- alternate ['a', 'b', 'c', 'd', 'e', 'f', 'g'] >>> ['b', 'a', 'd', 'c', 'f', 'e', 'g']
-- dicas: acesse os dois primeiros elementos com x:y:xs
--        na recursão, usar xs de x:y:xs faz a lista diminuir dois elementos
--        inclua mais uma condição de parada para listas de um elemento [z]
alternate :: [a] -> [a]
alternate [] = []
alternate [z] = [z]
alternate (x:y:xs) = y:x : alternate xs

-- sorted [10, 13, 45] >>> True
-- sorted [12, 15, 3, 20] >>> False
-- sorted [] >>> True
-- dicas: acesse os dois primeiros elementos com x:y:xs
--       chame a recursão reduzindo apenas um elemento, chamando y:xs
sorted :: Ord a => [a] -> Bool
sorted [] = True
sorted [z] = True
sorted (a:b:xs) = a < b && sorted (b:xs)

-- odds ['a', 'b', 'c', 'd', 'e', 'f'] >>> ['a', 'c', 'e']
-- odds ['a', 'b', 'c', 'd', 'e', 'f', 'g'] >>> ['a', 'c', 'e', 'g']
-- dica: adapte alternate
odds :: [a] -> [a]
odds [] = []
odds [z] = [z]
odds (x:y:xs) = x : odds xs

-- unique ['a', 'a', 'a', 'b', 'b', 'a', 'a', 'a', 'c', 'c'] >>> ['a', 'b', 'a', 'c']
-- dicas: crie uma função auxiliar que possui um parâmetro a mais
--        sugestão do nome da função auxiliar -> unique'
--        o parâmetro extra leva como informação qual elemento foi suprimido por último
--        a função auxiliar é a real função a resolver o problema
--        unique é uma fachada para a função auxiliar, menos carregada de informação
--            para quem usa
unique' :: Eq a => a -> [a] -> [a]
unique' n [] = []
unique' n (x:xs) = if n == x
                   then unique' n xs
                   else x : unique' x xs

unique :: Eq a => [a] -> [a]
unique [] = []
unique (x:xs) = x : unique' x xs

-- merge [2, 6, 18, 54] [1, 3, 9, 18, 27, 81]  >>> [1, 2, 3, 6, 9, 18, 18, 27, 54, 81]
-- considere que as listas de entrada são ordenadas
merge :: (Ord a) => [a] -> [a] -> [a]
merge [] [] = []
merge [] [a] = [a]
merge (x:xs) (y:ys) = if x < y
                        then x:y : merge xs (y:ys)
                        else y:x : merge (x:xs) ys

-- ==========
--  3a parte

-- myMax [1, 7, 3, 17, 11]  >>> 17
myMax :: Ord a => [a] -> a
myMax xs = myMax' xs (head xs)
myMax' [] a = a
myMax' (x:xs) a = if x > a
                then myMax' xs x
                else myMax' xs a


-- append [2, 6, 18, 54] [1, 3, 9, 18, 27, 81]  >>> [2, 6, 18, 54, 1, 3, 9, 18, 27, 81]
append :: [a] -> [a] -> [a]
append [] a = a
append (x:xs) ys = x: append xs ys

-- remq 'b' ['a', 'b', 'c', 'b', 'd', 'e' ] >>> ['a', 'c', 'd', 'e']
remq :: Eq a => a -> [a] -> [a]
remq y [] = []
remq y (x:xs) = if y == x
                then remq y xs
                else x : remq y xs

-- removeKFirst 'a' 2 ['x', 'y', 'a', 'z', 'w', 'a', 'f', 'g', 'a', 'p']  >>> ['x', 'y', 'z', 'w', 'f', 'g', 'a', 'p']
removeKFirst :: Eq a => a -> Int -> [a] -> [a]
removeKFirst _ k [] = []
removeKFirst y k (x:xs) = if k == 0
                          then (x:xs)
                            else if x == y
                              then removeKFirst y (k-1) xs
                              else x : removeKFirst y k xs

-- -- longest [[-1, 3], [10,11,12,13], [], [45,55]]  >>> [10, 11, 12, 13]
-- longest :: [[a]] -> [a]
-- longest [] [[]] = []
-- longest x [[y:ys]] = if length' x > length' y
--                      then longest x [[ys]]
--                      else longest y [[ys]]

-- firstOccurrence ['a', 'a', 'a', 'b', 'b', 'a', 'a', 'a', 'c', 'c']  >>> ['a', 'b', 'c']
-- firstOccurrence [1,2,3,3,4,4,2,2,5] >>> [1,2,3,4,5] // [1,3,4,2,5]
firstOccurrence :: Eq a => [a] -> [a]
firstOccurrence [] = []
firstOccurrence (x:xs) = if count x (x:xs) == 1
                         then x : firstOccurrence xs
                         else firstOccurrence xs
-- not returning the list in the correct order! Use another logic...

-- substitute 'c' 'd' ['a', 'c', 'c', 'e']  >>> ['a', 'd', 'd', 'e']
substitute :: Eq a => a -> a -> [a] -> [a]
substitute a b [] = []
substitute a b (x:xs) = if x == a
                        then b : substitute a b xs
                        else x : substitute a b xs

-- -- parlis [1, 2, 3] [11, 12, 13]  >>> [[1, 11], [2, 12], [3, 13]]
-- pairlis :: [a] -> [a] -> [[a]]
-- pairlis [] [] = []
-- pairlis a [] = [a]
-- pairlis (x:xs) (y:ys) = ((x:y) : pairlis xs ys)

-- posPlus [7, 5, 1, 4]    >>> [7, 6, 3, 7]
-- somar o elemento com sua posição
-- Inicia n com 0
posPlus :: Int -> [Int] -> [Int]
posPlus _ [] = []
posPlus n (x:xs) = (x+n) : posPlus (n+1) xs

main :: IO ()
main = putStrLn "blah"
