input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    compassdegre = input.compassHeading()
    if (compassdegre < 45) {
        RussianFont.showMessage("с", 200)
    } else if (compassdegre < 135) {
        RussianFont.showMessage("и", 200)
    } else if (compassdegre < 225) {
        RussianFont.showMessage("ю", 200)
    } else if (compassdegre < 315) {
        RussianFont.showMessage("з", 200)
    } else {
        RussianFont.showMessage("с", 200)
    }
})
input.onButtonPressed(Button.A, function () {
    randomNUM1 = randint(1, 5)
    randomNUM2 = randint(1, 5)
    basic.showString("" + (randomNUM1))
    basic.showString("+")
    basic.showString("" + (randomNUM2))
    basic.showString("=")
    resultMATH = randomNUM1 + randomNUM2
})
input.onButtonPressed(Button.B, function () {
    randomNUM1 = randint(1, 5)
    randomNUM2 = randint(1, 5)
    if (randomNUM1 >= randomNUM2) {
        basic.showString("" + (randomNUM1))
        basic.showString("-")
        basic.showString("" + (randomNUM2))
        basic.showString("=")
        resultMATH = randomNUM1 - randomNUM2
    } else {
        randomNUM1 = randint(1, 5)
        randomNUM2 = randint(1, 5)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (resultMATH))
    basic.pause(5000)
    basic.clearScreen()
})
let resultMATH = 0
let randomNUM2 = 0
let randomNUM1 = 0
let compassdegre = 0
for (let index = 0; index < 1; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
}
RussianFont.showMessage("☺", 50)
soundExpression.happy.play()
