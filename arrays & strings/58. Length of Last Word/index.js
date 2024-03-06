// Your code here
// 58. Length of Last Word
// Companies
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Example 1

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

function lastWordLength(s) {
    let startTime = performance.now();
    let ns = s.trim().split(" ")
    nsWord = ns[ns.length - 1]
    console.log(nsWord.length);
    let endTime = performance.now();
    let timeElapsed = endTime - startTime;
    console.log(timeElapsed);
}
lastWordLength("Hello World")

// function lastWordLength1(s) {
//     let startTime = performance.now();
//     const words = s.split(' ');

//     const validWords = words.filter((word) => word !== ""); //this to ensure empty spaces are not included 

//     const lastWord = validWords[validWords.length - 1]
//     console.log(lastWord.length)
//     let endTime = performance.now();
//     let timeElapsed = endTime - startTime;
//     console.log(timeElapsed);
// }
// lastWordLength1("Hello World")