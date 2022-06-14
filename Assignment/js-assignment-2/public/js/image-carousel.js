const carousel_container = document.querySelector(".carousel-container")
const image_wrapper = document.querySelector(".carousel-image-wrapper")
const image = document.querySelectorAll(".carousel-image-wrapper > img")
const image_array = []
const left_arrow = document.createElement("a")
const right_arrow = document.createElement("a")
const img_width = 500
let direction = 1
let speed = 10
let initial_position = 0
let next_position = 0
let index = 0
const dots = document.createElement("div")
let dot_array = []

dots.style.position = "absolute"
dots.style.left = "45%"
dots.style.bottom = "20%"
carousel_container.appendChild(dots)


function toPX(value) {
    return `${value}px`
}

function toInt(value) {
    return `${parseInt(value)}`
}

left_arrow.innerHTML = "&#xab;"
right_arrow.innerHTML = "&#xbb;"

carousel_container.appendChild(left_arrow)
carousel_container.appendChild(right_arrow)

left_arrow.style.position = "absolute"
left_arrow.style.top = "45%"
left_arrow.style.left = "5%"
left_arrow.style.fontSize = "50px"

right_arrow.style.position = "absolute"
right_arrow.style.top = "45%"
right_arrow.style.right = "5%"
right_arrow.style.fontSize = "50px"


// carousel_container.style.width = "1000px"
carousel_container.style.position = "relative"
carousel_container.style.width = "500px"
carousel_container.style.height = "100vh"
// carousel_container.style.left = "500px"
carousel_container.style.overflow = "hidden"


// image_wrapper.style.display = "flex"
image_wrapper.style.position = "absolute"
image_wrapper.style.left = "0"
image_wrapper.style.marginTop = "20%"
image_wrapper.style.height = "500px"
image_wrapper.style.width = "500px"


image.forEach((img, index) => {
    img.style.display = "block"
    img.style.width = "100%"
    img.style.position = "absolute"
    img.style.height = "100%"
    img.style.objectFit = "cover"

    image_array.push(img)

    img.style.left = `${index * img_width}px`


    const dot = document.createElement("a")
    dot.style.width = "20px"
    dot.style.height = "20px"
    dot.innerHTML = " "
    dot.style.borderRadius = "50%"
    dot.style.position = "absolute"
    dot.style.bottom = "10%"
    dot.style.background = "white"
    dot.style.left = `${index * 20}px`
    dot_array.push(dot)
    dots.appendChild(dot)
})


dot_array.forEach((child, index) => {
    speed = 10
    child.addEventListener("click", () => {

        let move = setInterval(() => {



            if (Number(toInt(image_wrapper.style.left)) > -(index * img_width)) {
                image_wrapper.style.left = `${Number(toInt(image_wrapper.style.left)) - speed}px`
            } else if (Number(toInt(image_wrapper.style.left)) < -(index * img_width)) {
                image_wrapper.style.left = `${Number(toInt(image_wrapper.style.left)) + speed}px`
                console.log(Number(toInt(image_wrapper.style.left)) + speed)
                console.log(`${-(index * img_width)}px`)
            }

            if (image_wrapper.style.left == `${-(index * img_width)}px`) {
                clearInterval(move)
            }
        })
        initial_position = index
    })
})

let max_img = image_array.length - 1

right_arrow.addEventListener("click", () => {
    speed = 10
    direction = -1
    if (initial_position === max_img) {
        initial_position = 0
    } else {
        initial_position++
    }

    let move = setInterval(() => {
        image_wrapper.style.left = `${((initial_position - 1) * img_width) * direction - speed}px`
        speed += 10
        if (speed === 500 + 10) {
            clearInterval(move)
            speed = 10
        }
    }, 1000 / 60)

})

left_arrow.addEventListener("click", () => {

    speed = 10
    if (initial_position === 0) {
        initial_position = max_img
    } else {
        initial_position--
    }


    let move = setInterval(() => {

        image_wrapper.style.left = `${(((initial_position - 1) * img_width) * -1 + speed) - 1000}px`
        speed += 10
        if (speed === 500 + 10) {
            clearInterval(move)
            speed = 10
        }
    }, 1000 / 60)
})


