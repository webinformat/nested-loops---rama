let x = 0
let y = 0
basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        x = 0
        led.toggle(x, y)
        basic.pause(100)
    }
    x = 1
    while (x <= 4) {
        y = 4
        led.toggle(x, y)
        x += 1
        basic.pause(100)
    }
    y = 3
    while (y >= 0) {
        x = 4
        led.toggle(x, y)
        y += -1
        basic.pause(100)
    }
    x = 3
    while (x > 0) {
        y = 0
        led.toggle(x, y)
        x += -1
        basic.pause(100)
    }
})
