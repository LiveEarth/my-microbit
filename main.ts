input.onButtonPressed(Button.A, function () {
    randomNUM1 = randint(1, 100)
    randomNUM2 = randint(1, 100)
    basic.clearScreen()
    basic.showString("?")
    resultMATH = randomNUM1 + randomNUM2
    OLED12864_I2C.clear()
    OLED12864_I2C.showString(
    0,
    0,
    " " + randomNUM1,
    1
    )
    OLED12864_I2C.showString(
    0,
    1,
    "+",
    1
    )
    OLED12864_I2C.showString(
    0,
    2,
    " " + randomNUM2,
    1
    )
    OLED12864_I2C.hline(
    0,
    25,
    20,
    1
    )
})
input.onButtonPressed(Button.B, function () {
    randomNUM1 = randint(1, 100)
    randomNUM2 = randint(1, 100)
    while (randomNUM1 <= randomNUM2) {
        randomNUM1 = randint(1, 100)
        randomNUM2 = randint(1, 100)
    }
    if (randomNUM1 >= randomNUM2) {
        basic.clearScreen()
        basic.showString("?")
        resultMATH = randomNUM1 - randomNUM2
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        0,
        0,
        " " + randomNUM1,
        1
        )
        OLED12864_I2C.showString(
        0,
        1,
        "-",
        1
        )
        OLED12864_I2C.showString(
        0,
        2,
        " " + randomNUM2,
        1
        )
        OLED12864_I2C.hline(
        0,
        25,
        20,
        1
        )
    }
})
input.onGesture(Gesture.Shake, function () {
    OLED12864_I2C.clear()
    umnojenieRAND1 = randint(2, 3)
    umnojenieRAND2 = randint(2, 9)
    resultMATH = umnojenieRAND1 * umnojenieRAND2
    OLED12864_I2C.showString(
    0,
    0,
    "" + umnojenieRAND1 + " x " + umnojenieRAND2,
    1
    )
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 120; index++) {
        led.plotBrightness(randint(0, 5), randint(0, 5), 255)
        basic.pause(20)
    }
    basic.clearScreen()
    OLED12864_I2C.vline(
    30,
    0,
    25,
    1
    )
    OLED12864_I2C.showNumber(
    7,
    1,
    resultMATH,
    1
    )
})
let picture = 0
let umnojenieRAND2 = 0
let umnojenieRAND1 = 0
let resultMATH = 0
let randomNUM2 = 0
let randomNUM1 = 0
OLED12864_I2C.init(60)
for (let index = 0; index < 2; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
}
basic.clearScreen()
OLED12864_I2C.showString(
1,
1,
"HI MAXIM :)",
1
)
soundExpression.giggle.play()
basic.pause(5000)
OLED12864_I2C.clear()
basic.forever(function () {
    while (input.isGesture(Gesture.ThreeG)) {
        basic.showIcon(IconNames.Sad)
        soundExpression.sad.play()
    }
    while (input.isGesture(Gesture.Shake)) {
        picture = randint(1, 5)
        if (picture == 1) {
            soundExpression.happy.play()
            for (let index = 0; index < 3; index++) {
                basic.pause(1000)
                basic.showLeds(`
                    . # . # .
                    . . . . .
                    # . . . #
                    . # # # .
                    . . . . .
                    `)
                basic.pause(1000)
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    # . . . #
                    . # # # .
                    `)
            }
            basic.pause(1000)
            basic.clearScreen()
        } else if (picture == 2) {
            soundExpression.happy.play()
            for (let index = 0; index < 3; index++) {
                basic.pause(1000)
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # # # # #
                    . # . # .
                    . # # # .
                    `)
                basic.pause(1000)
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # # # # #
                    . # # # .
                    . # . # .
                    `)
            }
            basic.pause(1000)
            basic.clearScreen()
        } else if (picture == 3) {
            soundExpression.happy.play()
            for (let index = 0; index < 3; index++) {
                basic.pause(1000)
                basic.showLeds(`
                    # # . . .
                    . # . . .
                    . # . . #
                    . # # # .
                    . # . # .
                    `)
                basic.pause(1000)
                basic.showLeds(`
                    . # # . .
                    . . # . .
                    . . # . .
                    . . # # #
                    . . # . #
                    `)
            }
            basic.pause(1000)
            basic.clearScreen()
        } else if (picture == 4) {
            soundExpression.happy.play()
            for (let index = 0; index < 3; index++) {
                basic.pause(1000)
                basic.showLeds(`
                    # . # . .
                    # # # # #
                    . . # . #
                    . # . # .
                    # . . . #
                    `)
                basic.pause(1000)
                basic.showLeds(`
                    . . # . #
                    # # # # #
                    # . # . .
                    . # . # .
                    . # . # .
                    `)
            }
            basic.pause(1000)
            basic.clearScreen()
        } else {
            soundExpression.happy.play()
            for (let index = 0; index < 3; index++) {
                basic.pause(1000)
                basic.showLeds(`
                    . # # # .
                    # # # # #
                    . . # . .
                    # . # . .
                    # # # . .
                    `)
                basic.pause(1000)
                basic.showLeds(`
                    . # # # .
                    # # # # #
                    . . # . .
                    . . # . #
                    . . # # #
                    `)
            }
            basic.pause(1000)
            basic.clearScreen()
        }
    }
})
