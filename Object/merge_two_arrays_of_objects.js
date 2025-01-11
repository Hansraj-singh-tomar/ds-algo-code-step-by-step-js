// Merge two Arrays of Objects 

let array1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
let array2 = [{ id: 1, age: 25 }, { id: 2, age: 30 }];

let map = {}

for (let elm of array1) {
    map[elm.id] = elm
}

// console.log(map); // { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }


let mergedArr = array2.map((item) => {
    return { ...item, ...map[item.id] }
})

console.log(mergedArr);  // [{id: 1, name: 'Alice', age: 25}, {id: 2, name: 'Bob', age: 30}]


// ------------------------------------------------------------

function mergeArrays(arr1, arr2) {
    // Create a map to store objects by their id
    const map = new Map();

    // Merge arr1 into the map
    arr1.forEach(obj => {
        map.set(obj.id, { ...obj });
    });

    // Merge arr2 into the map
    arr2.forEach(obj => {
        if (map.has(obj.id)) {
            // If id already exists, merge properties
            const mergedObj = map.get(obj.id);
            Object.keys(obj).forEach(key => {
                mergedObj[key] = obj[key];
            });
            map.set(obj.id, mergedObj);
        } else {
            // If id doesn't exist, add to the map
            map.set(obj.id, { ...obj });
        }
    });

    // Convert map values to array and sort by id
    const joinedArray = Array.from(map.values()).sort((a, b) => a.id - b.id);

    return joinedArray;
}

// Example usage:
const arr1 = [{ id: 1, name: "John" }, { id: 2, name: "Alice" }];
const arr2 = [{ id: 2, age: 30 }, { id: 3, name: "Bob" }];

const joinedArray = mergeArrays(arr1, arr2);
console.log(joinedArray);

