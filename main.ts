input.onButtonPressed(Button.A, function () {
    ball.turn(Direction.Left, 45)
})
input.onButtonPressed(Button.AB, function () {
    pse = 100
    while (pse < 1000) {
        ball.move(1)
        ball.ifOnEdgeBounce()
        basic.pause(pse)
        pse = pse * 2
    }
})
input.onButtonPressed(Button.B, function () {
    ball.turn(Direction.Right, 45)
})
let pse = 0
let next: game.LedSprite = null
let ball: game.LedSprite = null
let balls: game.LedSprite[] = []
ball = game.createSprite(2, 4)
ball.turn(Direction.Left, 90)
balls.unshift(ball)
for (let index = 0; index < 4; index++) {
    next = game.createSprite(randint(0, 4), randint(0, 3))
}
basic.forever(function () {
	
})
