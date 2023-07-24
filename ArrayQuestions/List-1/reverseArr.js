// first approach -

// function reverseArr(arr, start, end){
//     while(start < end){
//         let temp = arr[start]
//         arr[start] = arr[end]
//         arr[end] = temp;
//         start++;
//         end--;
//     }
//     return arr;
// }

// let arr = [1,2,3,4,5,6];
// let n = arr.length;
// console.log(reverseArr(arr, 0, n-1));

// Second recursive approach -

function reverseArr(arr, start, end){
    if(start >= end){
        return;
    }

    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp;
    
    reverseArr(arr, start + 1, end - 1);

    return arr;
}

let arr = [1,2,3,4,5,6];
let n = arr.length;
console.log(reverseArr(arr, 0, n-1));