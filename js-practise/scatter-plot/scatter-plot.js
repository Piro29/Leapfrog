var points = [
    {x: Math.random()* 485, y: Math.random()* 485},
    {x: Math.random()* 485, y: Math.random()* 485},
    {x: Math.random()* 485, y: Math.random()* 485},
    {x: Math.random()* 485, y: Math.random()* 485},
    {x: Math.random()* 485, y: Math.random()* 485},
    {x: Math.random()* 485, y: Math.random()* 485},
    {x: Math.random()* 485, y: Math.random()* 485},

]


let container = document.createElement("div")


container.className = "scatter-plot"
container.style.height = "500px"
container.style.width = "500px"
container.style.border = "1px solid black"
container.style.position = "relative"
document.body.appendChild(container)

function dot(x,y){
    let blueDot = document.createElement("div")

    blueDot.style.position = "absolute"
    blueDot.style.width = "15px"
    blueDot.style.height = "15px"
    blueDot.style.borderRadius = "100%"
    blueDot.style.left = `${x}px`
    blueDot.style.top = `${y}px`
    blueDot.style.backgroundColor = "blue"
    console.log(x,y)
    container.appendChild(blueDot)

    blueDot.addEventListener("click",function (){
        blueDot.style.display = "none"
    })

    blueDot.addEventListener("mouseover",function (){
        blueDot.style.transform = "scale(1.5)"
    })

    blueDot.addEventListener("mouseout",function (){
        blueDot.style.transform = "scale(1)"
    })
}

points.forEach(point=>{
    dot(point.x,point.y)
})

