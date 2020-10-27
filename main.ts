let counter = 1
basic.forever(function () {
    if (input.temperature() >= 0 && input.temperature() <= 33) {
        basic.showIcon(IconNames.Happy)
    } else if (input.temperature() > 33 && input.temperature() <= 40) {
        basic.showIcon(IconNames.Confused)
    } else if (input.temperature() > 40) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(5000)
        while (counter <= 13) {
            basic.showLeds(`
                . . # . .
                . # # # #
                # # # # #
                . # # # #
                . . # . .
                `)
            basic.clearScreen()
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
        basic.showIcon(IconNames.Heart)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    }
})
