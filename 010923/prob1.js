const filter5 = (array, len) => {
    const result = array.filter(i => i.length > len);
    return result
}

const words = ['car', 'elephant', 'desert', 'pumpkin', 'eat', 'fish', 'dish'];
const len = 5;

console.log(filter5(words, len));