

function thirdMax(arr) {
  let uniqueNums = new Set(arr)

  let sortedNums = [...uniqueNums].sort((a, b) => b - a)

  if (sortedNums.length < 3) {
    return sortedNums[0]
  } else { return sortedNums[2] }

}

console.log(thirdMax([3, 2, 1]))