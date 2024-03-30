// Find All Duplicates in an array

// Brute force approach
// function findDuplicate(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 result.push(arr[j])
//             }
//         }
//     }
//     return result;
// }

// let arr = [1, 2, 3, 2, 5, 3, 4, 6];
// console.log(findDuplicate(arr));


// 1.
// let arr = [4,3,2,7,8,2,3,1];
// let set = new Set();
// let arr2 = []

// for(let i = 0; i < arr.length; i++){
//     if(set.has(arr[i])){
//         arr2.push(arr[i])
//     }
//     set.add(arr[i])
// }

// console.log(set);  // Set(6) { 4, 3, 2, 7, 8, 1 }
// console.log(arr2);  // [2,3]

//2 - codebix
// let arr = [4,3,2,7,8,2,3,1];

// let res = [];

// for(let i = 0; i < arr.length; i++) {
//     let index = Math.abs(arr[i]) - 1; // -1 karke visited kar denge iss index ko

//     if(arr[index] < 0){ // means that, arr[index] ki value negative hai then that value is already marked visited
//         res.push(Math.abs(arr[i]));
//     }

//     arr[index] = -arr[index];
// }

// // console.log(arr);
// console.log(res);  // [2,3]


// 3.

// let arr = [4, 3, 2, 7, 8, 2, 3, 11];
// let obj = {};
// let res = [];

// for (let elm of arr) {
//     if (obj[elm]) {
//         res.push(elm)
//     }
//     obj[elm] = elm
// }


// console.log(res);

// ---------------------------------------------------------

// we are finding and removing duplicates from the array
function findDuplicate(arr) {
    let result = {};
    let duplicate = [];
    for (let elm of arr) {
        if (result[elm]) {
            duplicate.push(elm);
            result[elm]++;
        } else {
            result[elm] = 1;
        }
    }
    let uni = Object.keys(result)
    return { uni, duplicate };
}

let arr = [2, 3, 4, 3, 5, 2, 6];
console.log(findDuplicate(arr));

