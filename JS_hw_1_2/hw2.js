function obfuscate(string) {
    let med = string.split("@");
    let name = med[0];
    let end = med[1];
    let newName = "";
    let i = name.length - 1;
    while (i >= name.length / 2) {
        // name[i] = "*";
        newName = name.slice(0, i) + "*" + name.slice(i + 1);
        i--;
    }
    let result = newName.concat("@", end);
    return result;
}

let str = "shawazisonfire@gmail.com";

console.log(obfuscate(str));

// not working