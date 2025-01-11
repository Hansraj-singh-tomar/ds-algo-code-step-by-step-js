function compressBruteForce(chars) {
    let compressed = [];
    let count = 1;

    for (let i = 1; i <= chars.length; i++) {
        if (chars[i] === chars[i - 1]) {
            count++; // Increment count if the current character matches the previous
        } else {
            compressed.push(chars[i - 1]); // Add the character
            if (count > 1) {
                compressed.push(String(count));
            }
            count = 1; // Reset the count
        }
    }

    console.log(compressed);
}

// Example usage
let chars1 = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compressBruteForce(chars1));  // ['a', '2', 'b', '2', 'c', '3']
