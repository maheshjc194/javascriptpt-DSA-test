function charFrequency(str) {
    let frequency = {};

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (frequency[ch] === undefined) {
            frequency[ch] = 1;
        } else {
            frequency[ch]++;
        }
    }

    return frequency;
}

console.log(charFrequency("javascript"));