// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

function position(nums, target){
    const leftIndex = findLeft(nums, target)
    const rightIndex = findRight(nums, target)
    console.log(leftIndex, rightIndex);
    return [leftIndex, rightIndex]

    function findLeft(nums, target){
        let [l, r] = [0, nums.length]
        let leftIndex = -1
        
        while(l<=r){
            let mid = Math.floor((l +r)/2)
            if(target === nums[mid]){
                leftIndex = mid
                r = mid - 1
            }else if(target>nums[mid]){
                l = mid + 1
            }else {
                r = mid -1
            }
        }
        console.log(leftIndex);
        return leftIndex
    }

    function findRight(nums, target){
        let [l, r] = [0, nums.length]
        let rightIndex = -1
        
        while(l<=r){
            let mid = Math.floor((l +r)/2)
            if(target === nums[mid]){
                rightIndex = mid
                l = mid + 1
            }else if(target>nums[mid]){
                l = mid + 1
            }else {
                r = mid -1
            }
        }
        console.log(rightIndex);
        return rightIndex
    }
        
        
}
position([5,7,7,8,8,10], 8)