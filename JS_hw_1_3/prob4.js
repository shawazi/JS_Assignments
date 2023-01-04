function anyTwo(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == k) {
                return `Yes, ${nums[i]} + ${nums[j]} = ${k}`;
            }
        }
    }
    
}

const list = [10, 1, 16, 15, 3, 7, 1, 16];
const num = 17;

console.log(anyTwo(list, num));


// This works as a binary (yes or no) function, but it is unable to determine how many pairs from the input list are equal to the target. If there are multiple pairs that add up to the target, this function will only reveal the first pair it finds. 