function stringCompression(str) {
    let count = 1;
    let compressed = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }

    return compressed.length < str.length ? compressed : str;
}

console.log(stringCompression("aaabbccc")); // [a3b2c3]