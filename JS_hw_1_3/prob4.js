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