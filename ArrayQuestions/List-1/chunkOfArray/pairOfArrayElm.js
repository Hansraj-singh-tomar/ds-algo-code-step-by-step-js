// Q.
// let arrrr = [4, 5, 6, 7, 4, 8, 9, 7];
// output = [[4,4],[5],[6],[7,7],[8]]

// Time Complexity - O(n2)
let arrrr = [4, 5, 6, 7, 4, 8, 9, 7];
let set = [...new Set(arr)];
let newArr = [];
set.map((el) => {
    let subArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (el === arr[i]) {
            subArr.push(arr[i])
        }
    }
    newArr.push(subArr)
})

console.log(newArr); // [[4,4],[5],[6],[7,7],[8]]


// -------------------------------------


// Time Complexity - O(n)
function pairOfArray(arr) {
    let map = {};

    for (let elm of arr) {
        if (!map[elm]) {
            map[elm] = [];
        }
        map[elm] = [...map[elm], elm]
    }

    console.log(map); // {4: [4,4], 5: [5], 6: [6], 7: [7,7], 8: [8], 9: [9]}

    return Object.values(map)
}

let arr = [4, 5, 6, 7, 4, 8, 9, 7];
console.log(pairOfArray(arr));
