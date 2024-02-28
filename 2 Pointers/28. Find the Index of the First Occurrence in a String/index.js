// Your code here
// 28. Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// function findIndex(haystack, needle){
//    if(haystack.includes(needle)){
//     console.log(haystack.indexOf(needle, 0))
//    }
//    else console.log(-1)
// }

// findIndex("sadbutsad", "sad")

//without built in method
function findIndex(haystack, needle){
    for(let i =0; i<=haystack.length - needle.length; i++){ //this will make sure to iterate only on the required length
        let found = true;
        for(let j=0; j<needle.length; j++){ //iterates over needle
            if(haystack[i+j] !== needle[j]){ //here [i + j] means comparing both haystack and needle like i =0 and j = 0 so i+j = 0 and i =0; j=1; i+j =1 and so on ... and if any of i + j is not equal to needle make found false
                found = false;
                break;
            }

        }
        if(found) console.log(i);  //if found return index of first
        
    }
    return -1
}



findIndex("sadbutsad", "but")