function countVowel(str) {
    let count = 0;

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        // Check if the current character is a vowel
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++;
        }
    }

    return count;
}

console.log(countVowel("hello"));

// ----------------------------------------------------------------------------------------

// coder Army
// using recursion

function countVowel(str, i) {
    if (i == -1) {
        return 0;
    }
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
        return 1 + countVowel(str, i - 1)
    } else {
        return countVowel(str, i - 1)
    }
}

let str = "hansraj";
let i = str.length;
console.log(countVowel(str, i)); // 2