const specs = (rad) => {
    let perimeter = 2 * rad * Math.PI;
    let area = Math.PI * rad ** 2;

    console.log(perimeter);
    console.log(area);

    return `For a circle with radius ${rad} in any unit, the perimeter is ${perimeter} and the area is ${area}, in the same units as the radius that was given earlier.`
}

console.log(specs(10))