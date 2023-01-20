const cars = [  { make: 'Ford', model: 'F150 XLT', year: 2018, color: 'Gray' },  { make: 'Porsche', model: 'Cayman GT4', year: 2016, color: 'Gold' },  { make: 'Audi', model: 'S7 Prestige', year: 2017, color: 'Blue' },  { make: 'Mercedes', model: 'S550', year: 2019, color: 'Black' }]

function sortYear(cars) {

}

const year = cars.map(({year}) => year);
year.sort((a, b) => b - a)
console.log(year)
// ONLY RETURNS THE YEAR ARRAY, I NEED TO RETURN THE ENTIRE DICTIONARY ARRAY! WHAT! 