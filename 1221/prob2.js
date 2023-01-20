const exponentiate = (base, exp) => {
    let result = 1;
    for (i = exp; i >= 1; i--) {
        result *= base;
    }
    return result
}

console.log(exponentiate(2,3))