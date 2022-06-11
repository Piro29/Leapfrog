const box = document.getElementById("box")

const boundaryH = 500
const boundaryW = 500

function toPX(value) {
    return `${value}px`
}

box.style.width = `${toPX(boundaryW)}`
box.style.height = `${toPX(boundaryH)}`
box.style.border = '1px solid black'
box.style.positionition = 'relative'

const BALL_COUNT = 50
const ballArray = []

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return (Math.random() * (max - min) + min)
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static add(vector1, vector2) {
        return new Vector(vector1.x + vector2.x, vector1.y + vector2.y);
    }

    static multiply(vector, scalar) {
        return new Vector(vector.x * scalar, vector.y * scalar);
    }

    static divide(vector, scalar) {
        return new Vector(vector.x / scalar, vector.y / scalar);
    }

    static substract(vector1, vector2) {
        return new Vector(vector1.x - vector2.x, vector1.y - vector2.y);
    }

    static random(minX, maxX, minY, maxY) {
        return new Vector(getRandomInt(minX, maxX), getRandomInt(minY, maxY))
    }

    static magnitude(vector1, vector2) {

        const x = vector1.x - vector2.x
        const y = vector1.y - vector2.y

        return (new Vector(x, y))
    }

    static distance(vector1, vector2) {
        return Math.sqrt((Math.pow((vector2.x - vector1.x), 2)) + (Math.pow((vector2.y - vector1.y), 2)))
    }

}

class Ball {
    constructor(x, y) {
        this.radius = getRandomInt(5, 20)
        this.position = new Vector(x, y)
        this.velocity = Vector.random(-1, 1, -1, 1)
        this.accelaration = new Vector(0, 0)
    }

    create() {
        this.element = document.createElement('div')
        this.element.style.width = `${toPX(this.radius * 2)}`
        this.element.style.height = `${toPX(this.radius * 2)}`

        this.element.style.left = `${toPX(this.position.x)}`
        this.element.style.top = `${toPX(this.position.y)}`


        this.element.style.borderRadius = '50%'
        this.element.style.background = `${getRandomColor()}`
        this.element.style.position = 'absolute'

        box.appendChild(this.element)
    }

    move() {
        this.position = Vector.add(this.position, this.velocity)
        // this.velocity = Vector.add(this.velocity, this.accelaration)
        // this.acc = Vector.multiply(this.acc, 0);

        this.element.style.left = `${toPX(this.position.x)}`
        this.element.style.top = `${toPX(this.position.y)}`

        this.velocity = Vector.add(this.velocity, this.accelaration)
        this.accelaration = Vector.multiply(this.accelaration, 0)
    }

    handleWallCollision() {
        // if (this.position.x - this.radius <= 0 || this.position.x + this.radius >= boundaryW) this.velocity.x = -this.velocity.x
        // else if (this.position.y - this.radius <= 0 || this.position.y + this.radius >= boundaryH) this.velocity.y = -this.velocity.y

        if (this.position.x + this.radius > boundaryW) this.velocity.x = -1
        if (this.position.y + this.radius > boundaryH) this.velocity.y = -1

        if (this.position.x - this.radius < 0) this.velocity.x = 1
        if (this.position.y - this.radius < 0) this.velocity.y = 1
    }

    checkCollision(ball) {
        // const v = Vector.substract(this.position, ball.position)
        const distance = Vector.distance(this.position, ball.position)

        let vCollision = Vector.magnitude(ball.position, this.position)
        let vCollisionNorm = Vector.divide(vCollision, distance)

        // let vRelativeVelocity = Vector.substract(ball.velocity, this.velocity)
        // let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;

        if (distance <= this.radius + ball.radius) {

            this.velocity.x -= (vCollisionNorm.x)
            this.velocity.y -= (vCollisionNorm.y)

            ball.velocity.x += (vCollisionNorm.x)
            ball.velocity.y += (vCollisionNorm.y)


        }
    }
}


for (let i = 0; i < BALL_COUNT; i++) {

    const ball = new Ball(
        getRandomInt(0, boundaryW),
        getRandomInt(0, boundaryH)
    )

    ball.create()
    ballArray.push(ball)
}


function play() {

    ballArray.forEach((ball) => {
        ball.move()
        ball.handleWallCollision()
    })

    for (let i = 0; i < ballArray.length; i++) {
        const current = ballArray[i]
        const rest = ballArray.slice(i + 1)

        for (let p of rest) {
            p.checkCollision(current)
        }
    }


    window.requestAnimationFrame(() => {
        play()
    })
}

play()