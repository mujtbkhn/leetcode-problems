
// 1. Two Sum

// Easy
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(nums, target){
    for(let i =0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                console.log([i, j])
                return [i, j]
            }
        }
    }
    return []
}
twoSum([7,11, 2,15], 9)

// function twoSum(nums, target) {
//     const numsMap = nums.map((num, index) => [num, index])
//     numsMap.sort((a,b)=> a[0] -b[0]) //the zero here means the num of [num, index]
//     let [l, r] = [0, nums.length - 1];

//     while (l < r) {
//         const sum = numsMap[l][0] + numsMap[r][0] // the left and right of 'num'
//         if (sum === target) {
//             console.log([numsMap[l][1], numsMap[r][1]]) // the left and right of 'index' ...[1]
//             return [numsMap[l][1], numsMap[r][1]]
//         } else if (sum < target) {
//             l++
//         } else { r-- }
//     }
//   return []
// }
// twoSum([7,11,15, 3], 9)