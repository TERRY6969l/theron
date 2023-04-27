let teller = 0
input.onButtonPressed(Button.A, function () {
    teller = 1
    basic.showNumber(teller)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(teller)
})
