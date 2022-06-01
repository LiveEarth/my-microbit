def on_logo_long_pressed():
    global compassdegre
    compassdegre = input.compass_heading()
    if compassdegre < 45:
        basic.show_string("N")
    elif compassdegre < 135:
        basic.show_string("E")
    elif compassdegre < 225:
        basic.show_string("S")
    elif compassdegre < 315:
        basic.show_string("W")
    else:
        basic.show_string("N")
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

def on_button_pressed_a():
    global randomNUM1, randomNUM2, resultMATH
    randomNUM1 = randint(1, 50)
    randomNUM2 = randint(1, 50)
    for index in range(100):
        led.plot_brightness(randint(0, 5), randint(0, 5), randint(0, 255))
        basic.pause(25)
    basic.clear_screen()
    basic.pause(100)
    basic.show_string("" + str((randomNUM1)))
    basic.show_string("+")
    basic.show_string("" + str((randomNUM2)))
    basic.show_string("=")
    resultMATH = randomNUM1 + randomNUM2
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global randomNUM1, randomNUM2, resultMATH
    randomNUM1 = randint(1, 50)
    randomNUM2 = randint(1, 50)
    while randomNUM1 <= randomNUM2:
        randomNUM1 = randint(1, 50)
        randomNUM2 = randint(1, 50)
    if randomNUM1 >= randomNUM2:
        for index2 in range(100):
            led.plot_brightness(randint(0, 5), randint(0, 5), randint(0, 255))
            basic.pause(25)
        basic.clear_screen()
        basic.pause(100)
        basic.show_string("" + str((randomNUM1)))
        basic.show_string("-")
        basic.show_string("" + str((randomNUM2)))
        basic.show_string("=")
        resultMATH = randomNUM1 - randomNUM2
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    for index3 in range(100):
        led.plot_brightness(randint(0, 5), randint(0, 5), randint(0, 255))
        basic.pause(25)
    basic.clear_screen()
    basic.pause(100)
    basic.show_string("" + str((resultMATH)))
    basic.pause(5000)
    basic.clear_screen()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

picture = 0
resultMATH = 0
randomNUM2 = 0
randomNUM1 = 0
compassdegre = 0
for index4 in range(1):
    basic.show_icon(IconNames.HEART)
    basic.pause(100)
    basic.show_icon(IconNames.SMALL_HEART)
soundExpression.giggle.play()

def on_forever():
    global picture
    while input.is_gesture(Gesture.THREE_G):
        basic.show_icon(IconNames.SAD)
        soundExpression.sad.play()
    while input.is_gesture(Gesture.SHAKE):
        picture = randint(1, 5)
        if picture == 1:
            soundExpression.happy.play()
            for index5 in range(3):
                basic.pause(1000)
                basic.show_leds("""
                    . # . # .
                                        . . . . .
                                        # . . . #
                                        . # # # .
                                        . . . . .
                """)
                basic.pause(1000)
                basic.show_leds("""
                    . . . . .
                                        . # . # .
                                        . . . . .
                                        # . . . #
                                        . # # # .
                """)
            basic.pause(1000)
            basic.clear_screen()
        elif picture == 2:
            soundExpression.happy.play()
            for index6 in range(3):
                basic.pause(1000)
                basic.show_leds("""
                    . . # . .
                                        . # # # .
                                        # # # # #
                                        . # . # .
                                        . # # # .
                """)
                basic.pause(1000)
                basic.show_leds("""
                    . . # . .
                                        . # # # .
                                        # # # # #
                                        . # # # .
                                        . # . # .
                """)
            basic.pause(1000)
            basic.clear_screen()
        elif picture == 3:
            soundExpression.happy.play()
            for index7 in range(3):
                basic.pause(1000)
                basic.show_leds("""
                    # # . . .
                                        . # . . .
                                        . # . . .
                                        . # # # .
                                        . # . # .
                """)
                basic.pause(1000)
                basic.show_leds("""
                    . # # . .
                                        . . # . .
                                        . . # . .
                                        . . # # #
                                        . . # . #
                """)
            basic.pause(1000)
            basic.clear_screen()
        elif picture == 4:
            soundExpression.happy.play()
            for index8 in range(3):
                basic.pause(1000)
                basic.show_leds("""
                    # . # . .
                                        # # # # #
                                        . . # . #
                                        . # . # .
                                        # . . . #
                """)
                basic.pause(1000)
                basic.show_leds("""
                    . . # . #
                                        # # # # #
                                        # . # . .
                                        . # . # .
                                        . # . # .
                """)
            basic.pause(1000)
            basic.clear_screen()
        else:
            soundExpression.happy.play()
            for index9 in range(3):
                basic.pause(1000)
                basic.show_leds("""
                    . # # # .
                                        # # # # #
                                        . . # . .
                                        # . # . .
                                        # # # . .
                """)
                basic.pause(1000)
                basic.show_leds("""
                    . # # # .
                                        # # # # #
                                        . . # . .
                                        . . # . #
                                        . . # # #
                """)
            basic.pause(1000)
            basic.clear_screen()
basic.forever(on_forever)
