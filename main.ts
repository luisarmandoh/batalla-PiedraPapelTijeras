radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        j1 = 1
    } else if (receivedNumber == 2) {
        j1 = 2
    } else if (receivedNumber == 3) {
        j1 = 3
    } else if (receivedNumber == 4) {
        j2 = 4
    } else if (receivedNumber == 5) {
        j2 = 5
    } else if (receivedNumber == 6) {
        j2 = 6
    }
})
function batalla () {
    if (j1 == 1 && j2 == 4 || (j1 == 2 && j2 == 5 || j1 == 3 && j2 == 6)) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
    } else if (j1 == 1 && j2 == 6 || (j1 == 2 && j2 == 4 || j1 == 3 && j2 == 5)) {
        basic.showString("WIN")
        basic.showIcon(IconNames.Surprised)
        basic.showLeds(`
            . # . . #
            . # . # #
            . # . . #
            # # . . #
            . . . . .
            `)
    } else {
        basic.showString("WIN")
        basic.showIcon(IconNames.Surprised)
        basic.showLeds(`
            . # . # #
            . # . . #
            . # . # .
            # # . # #
            . . . . .
            `)
    }
}
input.onGesture(Gesture.Shake, function () {
    batalla()
    basic.pause(5000)
    basic.clearScreen()
    basic.showLeds(`
        . # # . #
        # . . # #
        # . # # #
        # . . . .
        . # # # .
        `)
})
let j2 = 0
let j1 = 0
radio.setGroup(9)
