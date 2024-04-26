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