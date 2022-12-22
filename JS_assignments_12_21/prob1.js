function identityMatrix(n) {
    // code here that creates and then returns an n row by n column identity matrix.

    // Thanks, GPT.

    let matrix = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                matrix += " 1";
            } else {
                matrix += " 0";
            }
        }
        matrix += "\n";
    }
    return matrix;
}

let matrix = identityMatrix(50);
console.log(matrix)