const obj = {
    name: "Prashant Shakya",
    address: "Ason",
    emails: "prashantshk29@gmail.com",
    interests: ["Games", "News", "Manga", "Anime"],
    education: [
        {
            name: "Annapurna",
            enrolledDate: "2060"
        },
        {
            name: "Nist",
            enrolledDate: "2071"
        },
        {
            name: "NCCS",
            enrolledDate: "2073"
        }
    ]
}

obj.education.forEach(value => {

    console.log(`Name: ${value.name}, Date: ${value.enrolledDate}`)


    // for (let key in o) {
    //     console.log(`${"name"} : ${o["name"]}, ${"enrolledDate"} : ${o["enrolledDate"]}`)
    // }
})


// for (const [key, value] of Object.entries(obj.education)) {
//     console.log(key, value);
// }