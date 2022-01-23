input.onButtonPressed(Button.A, function () {
    ball.turn(Direction.Left, 45)
})
input.onButtonPressed(Button.AB, function () {
    move[0] = 5 + move[0]
})
input.onButtonPressed(Button.B, function () {
    ball.turn(Direction.Right, 45)
})
let next: game.LedSprite = null
let ball: game.LedSprite = null
let move: number[] = []
move = []
let balls: game.LedSprite[] = []
ball = game.createSprite(2, 4)
ball.turn(Direction.Left, 90)
balls.unshift(ball)
move.unshift(0)
for (let index = 0; index < 4; index++) {
    next = game.createSprite(randint(0, 4), randint(0, 3))
    move.push(0)
}
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        if (0 < move[index]) {
            balls[index].move(1)
            balls[index].ifOnEdgeBounce()
            for (let value of balls) {
                if (value != balls[index]) {
                    if (balls[index].isTouching(value)) {
                        value.set(LedSpriteProperty.Direction, balls[index].get(LedSpriteProperty.Direction))
                        balls[index].turn(Direction.Right, 180)
                        move[balls.indexOf(value)] = move[index]
                    }
                }
            }
            move[index] = move[index] - 1
        }
    }
    basic.pause(100)
})
