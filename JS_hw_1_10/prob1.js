function sumPositive(arr1) {
    if (Array.isArray(arr1) && allNums(arr1) == true) {
        let sum = 0;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] > 0) {
                sum += arr1[i];
            }
        }
        return sum
    } else return 0
}


function allNums(arr) {
    return arr.every(element => !isNaN(element));
}

let arr2 = [1, -4, 12, 0, -3, 29, -150];

console.log(sumPositive(arr2));




// is the answer 42 a reference to the answer to the ultimate question of the universe? 

// hitch-hikers guide to the galaxy is great, but if this is just a coincidence that's also funny