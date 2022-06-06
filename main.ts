input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    compassdegre = input.compassHeading()
    if (compassdegre < 45) {
        basic.showString("N")
        OLED12864_I2C.showString(
        0,
        0,
        "North",
        1
        )
        basic.pause(5000)
        basic.clearScreen()
        OLED12864_I2C.clear()
    } else if (compassdegre < 135) {
        basic.showString("E")
        OLED12864_I2C.showString(
        0,
        0,
        "East",
        1
        )
        basic.pause(5000)
        basic.clearScreen()
        OLED12864_I2C.clear()
    } else if (compassdegre < 225) {
        basic.showString("S")
        OLED12864_I2C.showString(
        0,
        0,
        "South",
        1
        )
        basic.pause(5000)
        basic.clearScreen()
        OLED12864_I2C.clear()
    } else if (compassdegre < 315) {
        basic.showString("W")
        OLED12864_I2C.showString(
        0,
        0,
        "West",
        1
        )
        basic.pause(5000)
        basic.clearScreen()
        OLED12864_I2C.clear()
    } else {
        basic.showString("N")
        OLED12864_I2C.showString(
        0,
        0,
        "North",
        1
        )
        basic.pause(5000)
        basic.clearScreen()
        OLED12864_I2C.clear()
    }
})
input.onButtonPressed(Button.A, function () {
    randomNUM1 = randint(1, 100)
    randomNUM2 = randint(1, 100)
    for (let index2 = 0; index2 < 120; index2++) {
        led.plotBrightness(randint(0, 5), randint(0, 5), 255)
        basic.pause(25)
    }
    basic.clearScreen()
    basic.pause(100)
    basic.showString("" + randomNUM1)
    basic.showString("+")
    basic.showString("" + randomNUM2)
    basic.showString("?")
    resultMATH = randomNUM1 + randomNUM2
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
    index = 0
    for (let index = 0; index <= 180; index++) {
        OLED12864_I2C.showString(
        4,
        1,
        "Time:" + (180 - index),
        1
        )
        basic.pause(1000)
    }
    OLED12864_I2C.clear()
    OLED12864_I2C.showString(
    4,
    2,
    "Bye !",
    1
    )
    basic.pause(5000)
    basic.clearScreen()
    OLED12864_I2C.clear()
})
input.onButtonPressed(Button.B, function () {
    randomNUM1 = randint(1, 100)
    randomNUM2 = randint(1, 100)
    while (randomNUM1 <= randomNUM2) {
        randomNUM1 = randint(1, 100)
        randomNUM2 = randint(1, 100)
    }
    if (randomNUM1 >= randomNUM2) {
        for (let index2 = 0; index2 < 120; index2++) {
            led.plotBrightness(randint(0, 5), randint(0, 5), 255)
            basic.pause(25)
        }
        basic.clearScreen()
        basic.pause(100)
        basic.showString("" + randomNUM1)
        basic.showString("-")
        basic.showString("" + randomNUM2)
        basic.showString("?")
        resultMATH = randomNUM1 - randomNUM2
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
        index = 0
        for (let index = 0; index <= 180; index++) {
            OLED12864_I2C.showString(
            4,
            1,
            "Time:" + (180 - index),
            1
            )
            basic.pause(1000)
        }
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        4,
        2,
        "Bye !",
        1
        )
        basic.pause(5000)
        basic.clearScreen()
        OLED12864_I2C.clear()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    OLED12864_I2C.clear()
    for (let index2 = 0; index2 < 120; index2++) {
        led.plotBrightness(randint(0, 5), randint(0, 5), 255)
        basic.pause(25)
    }
    basic.clearScreen()
    basic.pause(100)
    basic.showString("" + resultMATH)
    OLED12864_I2C.showString(
    0,
    0,
    "Answer: " + resultMATH,
    1
    )
    basic.pause(5000)
    basic.clearScreen()
    OLED12864_I2C.clear()
})
let picture = 0
let index = 0
let resultMATH = 0
let randomNUM2 = 0
let randomNUM1 = 0
let compassdegre = 0
OLED12864_I2C.init(60)
for (let index2 = 0; index2 < 2; index2++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
}
basic.clearScreen()
OLED12864_I2C.zoom(true)
OLED12864_I2C.showString(
0,
0,
"HAPPY",
1
)
OLED12864_I2C.showString(
0,
1,
"BIRTHDAY MAXI :)",
1
)
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
            for (let index2 = 0; index2 < 3; index2++) {
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
            for (let index2 = 0; index2 < 3; index2++) {
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
            for (let index2 = 0; index2 < 3; index2++) {
                basic.pause(1000)
                basic.showLeds(`
                    # # . . .
                    . # . . .
                    . # . . .
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
            for (let index2 = 0; index2 < 3; index2++) {
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
            for (let index2 = 0; index2 < 3; index2++) {
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
