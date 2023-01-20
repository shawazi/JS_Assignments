const obj1 = {
    job: 'Programmer',
    name: 'Bobo',
    shoeSize: 100
};

const obj2 = {name: 'firstName', job: 'Actor'};

const keySwap = (obj, changeKeys) => {
    const objectKeys = Object.keys(obj);
    console.log(objectKeys);
    const result = objectKeys.reduce((acc, key) => {
        if (changeKeys[key]) {
            return (acc = {...acc, [changeKeys[key]]: obj[key] });
        } else {
            return (acc = {...acc, [key]: obj[key] });
        }
    }) 
    return result;
}

console.log(keySwap(obj1, obj2));