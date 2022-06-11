var arr = [{
    id: 1,
    name: 'John',
}, {
    id: 2,
    name: 'Mary',
}, {
    id: 3,
    name: 'Andrew',
}];

function sortBy(array, key) {
    let temp

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i][key] > array[j][key]) {

                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}

var sorted = sortBy(arr, 'name');

console.log(sorted)