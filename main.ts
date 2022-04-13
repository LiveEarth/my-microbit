input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Duck)
    basic.pause(5000)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.House)
    basic.pause(5000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.StickFigure)
    basic.pause(5000)
})
let bearing = 0
for (let index = 0; index < 1; index++) {
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
        led.plotBrightness(randint(0, 5), randint(0, 5), 255)
        led.plotBrightness(randint(0, 5), randint(0, 5), 0)
        basic.pause(200)
    }
})
