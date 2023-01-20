const input = [1, 2, 3, 4, 5];

function squared(array) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        result.push(array[i] * array[i]);
    }
    return result;
}

console.log(squared(input));