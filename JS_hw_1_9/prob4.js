function initialize(input) {
    let inputArray = input.split(" ");
    console.log(inputArray)
    let initialArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        initialArray.push(inputArray[i][0])
    }
    console.log(initialArray);
    return initialArray.join("");
    
}

let test = "George Raymond Richard Martin";
console.log(initialize(test));