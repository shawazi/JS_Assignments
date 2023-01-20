let test = "www.clarusway.com";
let array1 = test.split("");
console.log(array1);
function getFrequency(string) {
    let freq = {};
    for (let i = 0; i < string.length; i++) {
        let character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};




const getFreq = string => {
    string.map()
    
}


console.log(getFreq(test));