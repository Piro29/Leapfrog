let string =""

function pattern(n){
    for(let i = 0;i<n;i++){
        for(let j = n-i;j>0;j--){
            string += "* "
        }

         string += "\n"
    }

    return string
}


console.log(pattern(5))