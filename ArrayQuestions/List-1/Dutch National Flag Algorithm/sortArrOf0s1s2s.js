// Q. Sort an array of 0s, 1s and 2s | Dutch National Flag problem

// First method - Dutch National Flag problem

// move all zero/negative and sort of 0s,1s and 2s 

// function sort012(arr, arr_size){
//     let mid = 0;
//     let lo = 0;
//     let hi = arr.length-1;
//     let temp = 0;
//     while(mid <= lo){
//     if(arr[mid] == 0){
//         temp = arr[lo];
//         arr[lo] = arr[mid];
//         arr[mid] = temp;
//         mid++;
//         lo++;
//     } else if(arr[mid] == 1){
//         mid++;
//     } else {
//         temp = arr[mid]
//         arr[mid] = arr[hi]
//         arr[hi] = temp;
//         hi--;
//     }
//     }
//     return arr;
// }

// let arr= [0, 1, 1, 2, 1, 2, 0, 0, 1 ];
      
// let arr_size = arr.length;
// console.log(sort012(arr, arr_size));


// second method using switch 

function sort012(arr, arr_size){
    let i, cnt0 = 0, cnt1 = 1, cnt2 = 0;

    for(i = 0; i < arr_size; i++){
        switch(arr[i]){
            case 0:
                cnt0++;
                break;
            case 1:
                cnt1++;
                break;
            case 2:
                cnt2++;
                break;
        }
    }

    i=0;

    while(cnt0 > 0){
        arr[i++] = 0;
        cnt0--;
    }

    while(cnt1 > 0){
        arr[i++] = 1;
        cnt1--;
    }

    while(cnt2 > 0){
        arr[i++] = 2;
        cnt2--;
    }

    return arr;
}

let arr= [0, 1, 1, 2, 1, 2, 0, 0, 1 ];
      
let arr_size = arr.length;
console.log(sort012(arr, arr_size));