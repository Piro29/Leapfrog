var fps = 60
var framerate = 1000/fps
var count = 1
var direction = 2

var box = document.createElement("div")

box.style.border = "1px solid black"
box.style.height = "500px"
box.style.width = "500px"
box.style.position = "relative"
box.style.padding = "0"
box.style.margin = "0"

document.body.appendChild(box)

var ball = document.createElement("div")

ball.className = "ball"
ball.style.width = "50px"
ball.style.height = "50px"
ball.style.borderRadius = "100%"
ball.style.position = "absolute"
ball.style.backgroundColor = "blue"
ball.style.border = "none"
ball.style.left = "45%"


box.appendChild(ball)

setInterval(function (){
    ball.style.top = `${(count+=direction)}px`
    if (count>450){
        direction = -2
    }
    if (count<0){
        direction = 2
    }
},framerate)