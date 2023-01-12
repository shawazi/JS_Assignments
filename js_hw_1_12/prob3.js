let input =
[{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }]

const CSV = (arr, columns) => {
    const columnsStr = columns.join(',');
    console.log(columnsStr)
    const result = arr.map(obj => {
        console.log(obj);
        columns.reduce((acc, key) => {
            return `${acc}`
        }, "");
    })
    return result;
}