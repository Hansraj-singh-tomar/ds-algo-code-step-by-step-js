// abbaca => step - 1 => aaca, step - 2 => ca and this is an answer for us

function removeAdjacentDuplicates(s) {
    const stack = [];

    for (let char of s) {
        // If the current character is the same as the top of the stack, pop it
        if (stack.length && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            // Otherwise, push the character onto the stack
            stack.push(char);
        }
    }

    // Join the characters in the stack to form the result string
    return stack.join('');
}

// Example usage:
const inputString = "abbaca";
console.log("After removing adjacent duplicates:", removeAdjacentDuplicates(inputString)); // Output: "ca"

