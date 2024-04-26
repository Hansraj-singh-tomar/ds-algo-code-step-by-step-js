function replaceSpaces(str, replaceWith) {
    // without creating result function how we will do that
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result += replaceWith;
        } else {
            result += str[i];
        }
    }
    return result;
}

// Example usage:
const inputString = "hello world";
const replacedString = replaceSpaces(inputString, "%20");
console.log("Replaced string:", replacedString); // Output: "hello%20world"


