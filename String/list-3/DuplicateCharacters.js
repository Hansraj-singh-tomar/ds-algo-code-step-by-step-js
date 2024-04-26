// Q. Find Duplicate characters in a string

function findDuplicates(str) {
    const charCount = {}; // Object to store character counts

    // Iterate through the string
    for (let char of str) {
        // If the character is already in the charCount object, increment its count
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // If the character is not in the charCount object, add it with count 1
            charCount[char] = 1;
        }
    }

    const duplicates = [];

    // Iterate through the charCount object
    for (let char in charCount) {
        // If a character's count is greater than 1, it is a duplicate
        if (charCount[char] > 1) {
            duplicates.push(char);
        }
    }

    return duplicates;
}

// Example usage:
const inputString = "leetcode";
const duplicateChars = findDuplicates(inputString);
console.log("Duplicate characters:", duplicateChars);



// ------------------------------------------------------

// The second example 
function findDuplicates(str) {
    const seen = new Set(); // Set to store characters seen so far
    const duplicates = new Set(); // Set to store duplicate characters

    for (let char of str) {
        if (seen.has(char)) {
            // If the character is already in seen, it's a duplicate
            duplicates.add(char);
        } else {
            seen.add(char);
        }
    }

    return Array.from(duplicates); // Convert Set to array and return
}

// Example usage:
const inputString = "leetcode";
const duplicateChars = findDuplicates(inputString);
console.log("Duplicate characters:", duplicateChars);


// Overall time complexity: O(n + m), for both examples 