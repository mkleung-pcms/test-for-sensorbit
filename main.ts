input.onButtonPressed(Button.A, function () {
    status = 1 - status
})
let level = 0
let status = 0
status = 1
basic.forever(function () {
	
})
loops.everyInterval(200, function () {
    level = sensors.Ultrasonic(DigitalPin.P15)
    if (status) {
        TM1650.off()
        led.plotBarGraph(
        level,
        255
        )
    } else {
        basic.clearScreen()
        TM1650.on()
        TM1650.showNumber(level)
    }
    if (level < 50) {
        sensors.sensorbit_rus04(DigitalPin.P16, RgbUltrasonics.All, RgbColors.Orange, ColorEffect.Breathing)
        music.setVolume(255)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
        pins.analogWritePin(AnalogPin.P1, 511)
    } else {
        music.stopAllSounds()
        pins.analogWritePin(AnalogPin.P1, 0)
    }
})
