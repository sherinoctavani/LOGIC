function twoSums (nums, target) {
    let output = []
    for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
           output.push (i, j)
           return console.log(output)
        }
      }
    }
  }
  
  twoSums([2, 7, 11, 5], 13)
  twoSums([3, 2, 4], 6)
  twoSums([3, 3], 6)