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

// ----------------------------------------------------------

// using recursion

function permutation(arr, index, ans) {
    if (index >= arr.length) {
        ans.push([...arr])
        return;
    }

    for (let j = index; j < arr.length; j++) {
        [arr[j], arr[index]] = [arr[index], arr[j]]
        permutation(arr, index + 1, ans);

        // backtrack
        // ye swap array ko again ussi form me lane ke liye jo swap se pehle tha
        [arr[j], arr[index]] = [arr[index], arr[j]]
    }
}

let arr = [1, 2, 3];
let ans = [];
permutation(arr, 0, ans);
console.log(ans);
