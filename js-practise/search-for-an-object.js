var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]

// function searchByName(objs, name){
//     const temp = objs.findIndex(function(array, index){
//         return array.name.toLowerCase() === name.toLowerCase()
//     })
//     return objs[temp]
// }
//
// console.log(searchByName(fruits, "apple"))


// function searchByKey(objs, key, name) {
//     const temp = objs.findIndex(function (array, index) {
//         return array[key].toLowerCase() === name.toLowerCase()
//     })
//     return objs[temp]
// }
//
// console.log(searchByKey(fruits, "color", "yellow"))


function searchByName(objs, name){
    return objs.find(function (obj){
        return obj.name.toLowerCase() === name.toLowerCase()
    })
}
console.log(searchByName(fruits, "apple"))


function searchByKey(objs,key,name){
    return objs.find((obj)=>{
        return obj[key].toLowerCase() === name.toLowerCase()
    })
}
console.log(searchByKey(fruits, "color", "yellow"))
