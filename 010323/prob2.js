function sortArray(array) {
    array.sort(function(a, b){return a - b});
    return array;
}

const nums = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(sortArray(nums));