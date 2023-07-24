// union => [1, 2, 3, 4, 5, 6, 7]
// Intersection => [3,5]

// first method 
// function unionArr(arr1, arr2){
//     const result = [...new Set([...arr1, ...arr2])]
//     return result;
// }

// let arr1 = [1,3,4,5,7]
// let arr2 = [2,3,5,6]
// console.log(unionArr(arr1, arr2));




// second method - object and it's methods
function unionArr(arr1, arr2){
    let map = {};

    // Remove the duplicates from arr1[]
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] in map) {
            map[arr1[i] += 1];
        } else {
            map[arr1[i]] = 1;
        }
    }

    // Remove the duplicates from arr1[]
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] in map) {
            map[arr2[i]] += 1;
        } else {
            map[arr2[i]] = 1;
        }
    }

    console.log(map);
    let uni = Object.keys(map);
    return uni;
}

let arr1 = [1,3,4,5,7]
let arr2 = [2,3,5,6]
console.log(unionArr(arr1, arr2)); // ['1', '2', '3','4', '5', '6','7']