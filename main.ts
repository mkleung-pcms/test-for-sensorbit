input.onButtonPressed(Button.A, function () {
    status = 1 - status
})
let status = 0
status = 1
basic.forever(function () {
    if (status) {
        led.plotBarGraph(
        sensors.slideRheostat(AnalogPin.P0),
        1023
        )
    } else {
        basic.showNumber(sensors.slideRheostat(AnalogPin.P0))
    }
    if (sensors.slideRheostat(AnalogPin.P0) > 500) {
        pins.analogWritePin(AnalogPin.P1, 1023)
    } else {
        pins.analogWritePin(AnalogPin.P1, 0)
    }
})
