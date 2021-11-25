input.onButtonPressed(Button.A, function () {
    radio.sendValue("Retning", 1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Musik")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Musik") {
        basic.showString(receivedString)
        music.playMelody("C D E F G A B C5 ", 120)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("Retning", 2)
})
radio.onReceivedValue(function (name, value) {
    if (name == "Retning") {
        if (value == 1) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else {
            if (value == 2) {
                basic.showLeds(`
                    . . # . .
                    . . . # .
                    # # # # #
                    . . . # .
                    . . # . .
                    `)
            }
        }
    }
})
basic.showLeds(`
    # . . # .
    # . # . .
    # # . . .
    # . # . .
    # . . # .
    `)
radio.setGroup(2)
basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
        basic.showString("A")
        basic.pause(500)
        basic.clearScreen()
    } else {
        if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P0)) {
            basic.showString("B")
            basic.pause(500)
            basic.clearScreen()
        } else {
            if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P0)) {
                basic.showString("C")
                basic.pause(500)
                basic.clearScreen()
            } else {
                if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P0)) {
                    basic.showString("D")
                    basic.pause(500)
                    basic.clearScreen()
                } else {
                    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P0)) {
                        basic.showString("E")
                        basic.pause(500)
                        basic.clearScreen()
                    }
                }
            }
        }
    }
})
