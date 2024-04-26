// Remove All Occurences of substring

// using regular expression 
function removeSubstrOccurrences(str, substr) {
    // Use the replace method with a global regular expression to remove all occurrences
    return str.replace(new RegExp(substr, 'g'), '');
}

// Example usage:
const inputString = "hello world hello";
const substring = "hello";
const result = removeSubstrOccurrences(inputString, substring);
console.log("Result:", result); // Output: " world "


// -----------------------------------------------------------------------

// Merthod - 1
function removeSubstrOccurrences(str, substr) {
    let result = '';
    let index = str.indexOf(substr); // Find the index of the first occurrence of the substring

    while (index !== -1) {
        // Append the substring before the current occurrence to the result
        result += str.substring(0, index);
        // Move the string pointer past the current occurrence
        str = str.substring(index + substr.length);
        // Find the index of the next occurrence of the substring
        index = str.indexOf(substr);
    }

    // Append the remaining string to the result
    result += str;

    return result;
}

// Example usage:
const inputString = "hello world hello";
const substring = "hello";
const result = removeSubstrOccurrences(inputString, substring);
console.log("Result:", result); // Output: " world "

// -----------------------------------------------------------------------

// Method - 2
function removeSubstrOccurrences(str, substr) {
    // Split the string into an array of substrings based on the occurrence of the substring
    const substrings = str.split(substr); // ['a', 'bac', 'bba']
    // Join the array back into a string without the substring
    return substrings.join('');
}

// Example usage:
const inputString = "hello world hello";
const substring = "hello";
const result = removeSubstrOccurrences(inputString, substring);
console.log("Result:", result); // Output: " world "
