function findDuplicates(str) {
    let charCount = {}

    for (let ch of str) {
        if (charCount[ch]) {
            charCount[ch]++;
        } else {
            charCount[ch] = 1;
        }
    }

    const duplicates = [];

    for (let ch in charCount) {
        if (charCount[ch] > 1) {
            duplicates.push(ch)
        }
    }

    return duplicates;
}

console.log(findDuplicates("leetcode"));