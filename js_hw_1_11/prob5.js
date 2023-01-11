const student = { name: 'David Rayy', sclass: 'VI', rollno: 12}

const checkProperty = (obj, property) => {
    // const keys = Object.keys(obj);
    // return keys.includes(property);
    // return obj.hasOwnProperty(property);
    return Boolean(obj?.[property]);    
}

console.log(checkProperty(student, "name"));
console.log(checkProperty(student, "score"));

