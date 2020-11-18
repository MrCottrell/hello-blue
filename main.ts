input.onButtonPressed(Button.A, function () {
    radio.sendString("Mr C")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
