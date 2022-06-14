const express = require("express")
const app = express()
const port = 3000

//static files
app.use("/js",express.static(__dirname + "/"))


app.get('/assignment-1.js', function(req, res){
    res.sendFile(__dirname + '/assignment-1.js');
});


app.get("",(req,res)=>{
    res.sendFile(__dirname + "/assignment-1.html")
})

app.listen(port, ()=>{
    console.info(`Listening on port ${port}`)
})