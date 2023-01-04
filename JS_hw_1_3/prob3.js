function mostFrequent(array) {
    let max = 0;
    let mostFrequentElement;
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                count++;
            }
        }
        if (count > max) {
            max = count;
            mostFrequentElement = array[i];
        }
    }

    return `${mostFrequentElement} is the most frequent element, with a frequency of ${max}.`;
}

const test = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3];

console.log(mostFrequent(test));


// this solution does not account for values that are tied for most frequency. it would be easiest to use a dictionary with key/value (key: value; value: frequency) pairs in order to account for tied values. There is probably a way to do it without a dictionary, but I'm not sure how...