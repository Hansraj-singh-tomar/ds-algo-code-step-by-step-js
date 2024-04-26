// using regular expression
function isPalindrome(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the cleaned string is a palindrome
    for (let i = 0; i < cleanedString.length / 2; i++) {
        if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

// Example usage:
const inputString = "A man, a plan, a canal: Panama";
console.log("Is palindrome:", isPalindrome(inputString)); // Output: true

// -----------------------------------------------------------------

// Without regular expression 
function isAlphanumeric(char) {
    const code = char.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) || // 0-9
        (code >= 65 && code <= 90) || // A-Z
        (code >= 97 && code <= 122)   // a-z
    );
}

function isPalindrome(s) {
    let cleanedString = '';
    // Remove non-alphanumeric characters and convert to lowercase
    for (let i = 0; i < s.length; i++) {
        if (isAlphanumeric(s[i])) {
            cleanedString += s[i].toLowerCase();
        }
    }

    // Check if the cleaned string is a palindrome
    for (let i = 0; i < cleanedString.length / 2; i++) {
        if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

// Example usage:
const inputString = "A man, a plan, a canal: Panama";
console.log("Is palindrome:", isPalindrome(inputString)); // Output: true

// -------------------------------------------------------------

// the third approach
function isAlphanumeric(char) {
    const code = char.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) || // 0-9
        (code >= 65 && code <= 90) || // A-Z
        (code >= 97 && code <= 122)   // a-z
    );
}

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Skip non-alphanumeric characters from left
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        // Skip non-alphanumeric characters from right
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }
        // Compare characters ignoring case
        if (left < right && s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// Example usage:
const inputString = "A man, a plan, a canal: Panama";
console.log("Is palindrome:", isPalindrome(inputString)); // Output: true


