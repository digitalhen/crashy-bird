input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let bird: game.LedSprite = null
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
let obstacles: game.LedSprite[] = []
let emptyObstacleY = randint(0, 4)
for (let index = 0; index <= 4; index++) {
    if (index != emptyObstacleY) {
        obstacles.push(game.createSprite(4, index))
    }
}
basic.forever(function () {
    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    basic.pause(1000)
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    emptyObstacleY = randint(0, 4)
    for (let index = 0; index <= 4; index++) {
        if (index != emptyObstacleY) {
            obstacles.push(game.createSprite(4, index))
        }
    }
    basic.pause(1000)
})
