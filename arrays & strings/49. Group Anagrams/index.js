// Your code here
// 49. Group Anagrams
// Given an array of strings str, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// Example 1:
// Input: str = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: str = [""]
// Output: [[""]]
// Example 3:

// Input: str = ["a"]
// Output: [["a"]]

function anonymous(words) {
    const sortWord = word => word.split('').sort().join('')
    const groups = {}

    for (const word of words) {
        const sortedWord = sortWord(word)

        if (!groups[sortedWord]) {
            groups[sortedWord] = [word]
        }
        else{
            groups[sortedWord].push(word)
        }
    }

    console.log(Object.values(groups));
    return Object.values(groups)

}
anonymous(["eat", "tea", "tan", "ate", "nat", "bat"])