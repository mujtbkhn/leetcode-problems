// 1207. Unique Number of Occurrences
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

function uniqueOccurrences(arr){
    let map = new Map()

    for(let i=0; i<arr.length; i++){
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i]) + 1)
        }else{
            map.set(arr[i], 1)
        }
    }

    // for(let [key, value] of map.entries()){
    //     console.log(`${key}: ${value}`);
    // }

    let isUnique = true
    let valuesSeen = new Set()

    for(let value of map.values()){
        if(valuesSeen.has(value)){
            isUnique = false
            break;
        }
        else{
            valuesSeen.add(value)
        }
    }
    if(isUnique){
        console.log(true);
        return true
    }else{
        console.log(false);
        return false
    }
}
uniqueOccurrences([1,2])