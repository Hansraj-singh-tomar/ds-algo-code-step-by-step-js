function permute(s) {
    if (s.length <= 1) {
        return [s];
    }

    const permutations = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const remainingChars = s.slice(0, i) + s.slice(i + 1);
        const innerPermutations = permute(remainingChars);

        for (let perm of innerPermutations) {
            permutations.push(char + perm);
        }
    }

    return permutations;
}

// Example usage:
const inputString = "abc";
console.log(permute(inputString)); // ["abc", "acb", "bac", "bca", "cab", "cba"]

