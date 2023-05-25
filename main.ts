radio.onReceivedNumber(function (receivedNumber) {
    led.setBrightness(led.brightness() + receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "POWER") {
        entendido = !(entendido)
        led.setBrightness(125)
        led.enable(entendido)
    }
})
let entendido = false
radio.setGroup(1)
entendido = false
led.enable(entendido)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
