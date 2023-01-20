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

console.log("_____________Adjusted Solution Below_____________");

function anyTwoRevised(nums, k) {
    let pairs = new Set();
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == k) {
                pairs.add([nums[i], nums[j]]);
            }
        }
    }
    return pairs.size > 0 ? pairs : "No pairs found.";
}
const list1 = [10, 1, 16, 15, 3, 7, 1, 16];
const num1 = 17;

console.log(anyTwoRevised(list1, num1));

// this is still returning too many pairs. the set or list of pairs should only include each pair once. so in the above list, there should be 5 unique pairs, not 10. it seems that the function is matching the last 5 pairs, even though they have already been counted (they are the matches to the first five pairs).