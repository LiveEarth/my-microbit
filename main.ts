let bearing = 0
for (let index = 0; index < 2; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
}
RussianFont.showMessage("☺", 50)
soundExpression.happy.play()
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing < 45 || bearing > 315) {
        basic.showString("N")
    } else {
        led.plotBrightness(randint(0, 5), randint(0, 5), randint(0, 255))
    }
})
