
// 14. Longest Common Prefix
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function lcp(str) {
    if (str.length === 0) return ""
    for (let i = 0; i < str[0].length; i++) { //only the first word
        for (let j = 1; j < str.length; j++) { //second word till the end
            if (str[0][i] !== str[j][i]) { //checking every letter of first with all the words
                return str[0].slice(0, i)  //return the string from the line where letters are not same 
            }
        }
    }
    return str[0] //returning the first word which has the length of same letters 
}

console.log(lcp(["flowers", "floor", "flying"]))