approach: 
- we need to have two functions to get both the index values 
- we will solve with binary search 
- for left if we find the target we make the right = mid - 1 so that the binary search solves all the elements in the left direction 
- same for the right if target found we make the left = mid + 1 such that the BS solves all the elements in the right direction