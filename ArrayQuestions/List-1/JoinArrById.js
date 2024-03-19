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

// -----------------------------------------------------------

// Second Method

function mergeArrays(arr1, arr2) {
    // Create an object to store merged objects by their id
    const mergedObj = {};

    // Merge arr1 into the mergedObj
    arr1.forEach(obj => {
        mergedObj[obj.id] = { ...obj };
    });

    // Merge arr2 into the mergedObj
    arr2.forEach(obj => {
        if (mergedObj[obj.id]) {
            // If id already exists, merge properties
            const merged = mergedObj[obj.id];
            Object.assign(merged, obj);
            mergedObj[obj.id] = merged;
        } else {
            // If id doesn't exist, add to the mergedObj
            mergedObj[obj.id] = { ...obj };
        }
    });

    // Convert the object values to array and sort by id
    const joinedArray = Object.values(mergedObj).sort((a, b) => a.id - b.id);

    return joinedArray;
}

// Example usage:
const arr1 = [{ id: 1, name: "John" }, { id: 2, name: "Alice" }];
const arr2 = [{ id: 2, age: 30 }, { id: 3, name: "Bob" }];

const joinedArray = mergeArrays(arr1, arr2);
console.log(joinedArray);


