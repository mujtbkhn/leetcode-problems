// Your code here
// 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1


// function singleNumber(nums) {
//     let result = 0
//     for(const num of nums){
//         result ^= num
//     }
//     console.log(result);
// }
// singleNumber([4,1,2,1,2])

function singleNumber(nums) {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] !== nums[i + 1]) {
            console.log(nums[i])
            return nums[i]
        }
    }
    console.log(nums[nums.length - 1])
    return nums[nums.length - 1]
}
singleNumber([4, 1, 2, 1, 2])