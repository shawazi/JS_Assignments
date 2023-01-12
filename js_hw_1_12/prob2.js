const orderArr = (arr, filter, order) => {
    if (order === "asc") {
        return arr.sort((item1, item2) => {
            if (item1[filter] > item2[filter]) return 1;
            else if (item1[filter] < item2[filter]) return -1;
            else return 0;
        });
        return arr.sort((item1, item2) => {
            if (item1[filter] > item2[filter]) return -1;
            else if (item1[filter]) < item2[filter] return 1;
            else return 0;
        })  
    }
}


const users = [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }]

console.log(orderArr(users, "name", "asc"));