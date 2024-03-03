// Your code here
// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

function searchInsertPos(nums, target) {
    let l = 0;
    let r = nums.length - 1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (target === nums[mid]) {
            console.log(mid);
            return mid
        } else if (target > nums[mid]) {
            l = mid + 1
        } else { r = mid - 1 }
    }
    console.log(l);
    return l
}
searchInsertPos([1, 3, 5, 6], 5)