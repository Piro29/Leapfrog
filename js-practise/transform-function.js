var numbers = [1, 2, 3, 4];

function transform(collection, tranFunc) {

    let newArray = []

    collection.forEach(value=>{
        newArray.push(tranFunc(value))
    })

    return newArray
}

let output = transform(numbers, function(num) {
    return num * 2;
});

console.log(output)