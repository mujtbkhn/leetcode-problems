# README

my approach: 
- first thing is we'll sort to make the missing element more visible
- secondly in a loop we'll check the i and i+1 diff is not 1 if yes then we have the element
- we'll just add 1 to i and return 
ex: [0,1,3]
3 - 1 !== 1 
so i + 1 ie 1 + 1 = 2 and we return 

gpt approach(better):
- we XOR the indices to get the all the indices
- we XOR the elements to get all (with the missing)
- we now XOR the two XOR's which will give us the only element which is missing 