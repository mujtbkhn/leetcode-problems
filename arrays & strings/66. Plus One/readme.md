# README

approach: 
- we start by reverse looping 
- firstly we check if the value is less than 9 then we increment it and return from there only
- so [1,2,3] will check for 3 which is less than so it will only increment 3 to 4 and return with [1,2,4]
- else if more or equal to 9 then will make it 0 and go in the loop again 
- so [1,2,9] will check the last which is 9 so will make it 0 and go in loop again and now see the i-- which is 2 which is less than 9  so will increment it and return with [1,3,0]
- if all the values are [9,9,9,9] then we will everything same just add a 1 in the beginning 