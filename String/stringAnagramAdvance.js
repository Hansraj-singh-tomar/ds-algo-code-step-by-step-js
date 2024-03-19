// input => strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// output => [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
// mif it is empty string than [""] => [[""]]

// Time Complexity - O(n)
function groupAnagram(strs) {
    let anagrams = {};
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i].split("").sort().join("")
        if (!anagrams.hasOwnProperty(str)) {
            anagrams[str] = [];
        }
        anagrams[str] = [...anagrams[str], strs[i]]
    }

    // first way
    // let result = [];
    // for (let key in anagrams) {
    //     result.push(anagrams[key])
    // }
    // return result;

    // second way
    return Object.values(anagrams);
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagram(strs)); // [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]


