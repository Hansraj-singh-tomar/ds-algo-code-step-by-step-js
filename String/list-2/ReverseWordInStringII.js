function reverseWords(s) {
    // Reverse the entire string
    reverse(s, 0, s.length - 1);

    let start = 0;
    let end = 0;

    // Reverse each word individually
    while (end < s.length) {
        // Move start and end pointers to the beginning and end of the word
        while (end < s.length && s[end] !== ' ') {
            end++;
        }
        reverse(s, start, end - 1); // Reverse the word
        start = end + 1; // Move start pointer to the next word
        end++;
    }
}

function reverse(arr, start, end) {
    while (start < end) {
        // Swap characters at start and end positions
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

// Example usage:
const s = ["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"];
reverseWords(s);
console.log(s.join("")); // Output: "blue is sky the"
