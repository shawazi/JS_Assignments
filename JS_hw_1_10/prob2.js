const scores = { 
    Mary: 85,  Susan: 75,  Barry: 65,  Alexis: 88,  Jane: 45,  Tina: 100,  Tom: 90,  Tim: 60 
};

let arr1 = Object.keys(scores).map(key => scores[key]); // i don't understand this but my output is returning 76 instead of 77.5.

// i understand the average function, and i also see that i can iterate through the dictionary of scores directly, i forgot until now

const average = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}

console.log(average(arr1));