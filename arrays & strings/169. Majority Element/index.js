// Your code here
// 169. Majority Element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// function majority(nums){
//     const map = {};
//     const length = nums.length/2

//     for(const num of nums){
//         if(!map[num]){
//             map[num] = 0
//         }
//             map[num]++

//         if(map[num]>length){
//             console.log(num);
//             return num
//         }

//     }
//     console.log(null);
//     return null
// }
// majority([3,2,3])

//with linear 0(1) space complexity (ie without using map that causes extra space)
function majority(nums){
    let candidate;
    let count = 0;
    for(const num of nums){
        if(count === 0){
            candidate = num
        }
        count += (num === candidate) ? 1 : -1
    }
    count = 0
    const length = nums.length / 2
    for(const num of nums){
        if(num === candidate){
            count++
        }
        if(count > length){
            console.log(candidate);
            return candidate
        }
    }
    console.log(null)
    return null
}
majority([3,1,1,1,3,2,2,2,2,2,2,2])

