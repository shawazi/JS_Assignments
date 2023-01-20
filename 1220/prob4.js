const converter = (value, unit) => {
    if (unit.toLowerCase() === "c") {
        return value * (9 / 5) + 32;

        
    } else if (unit.toLowerCase() === "f") {
        // formula for f to c
        return (value - 32) * (5 / 9);
    } else {
        return "You failed to enter either or both a valid value and a valid unit. You will no longer be able to use this function.";
    }
} 

console.log(converter(48, "f"))
console.log(converter(8.88888888888889, "c"))

