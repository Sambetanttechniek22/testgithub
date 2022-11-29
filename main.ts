input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    aantal += 1
})
let aantal = 0
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    if (aantal > 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.B)) {
        aantal = 0
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
})
