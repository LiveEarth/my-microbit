input.onButtonPressed(Button.A, function () {
    dice = randint(0, 99 + 1)
    basic.showNumber(dice)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.House)
    basic.pause(5000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    compassdegre = input.compassHeading()
    if (compassdegre < 45) {
        RussianFont.showMessage("с", 50)
    } else if (compassdegre < 135) {
        RussianFont.showMessage("и", 50)
    } else if (compassdegre < 225) {
        RussianFont.showMessage("ю", 50)
    } else if (compassdegre < 315) {
        RussianFont.showMessage("з", 50)
    } else {
        RussianFont.showMessage("с", 50)
    }
})
let compassdegre = 0
let dice = 0
for (let index = 0; index < 1; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
}
RussianFont.showMessage("☺", 50)
soundExpression.happy.play()
basic.forever(function () {
	
})
