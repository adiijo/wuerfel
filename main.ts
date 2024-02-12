input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    led.unplot(pointx, pointy)
    pointx += -1
    led.plot(pointx, pointy)
    if (pointx < 0) {
        led.unplot(pointx, pointy)
        pointx = 0
        led.plot(pointx, pointy)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    led.unplot(pointx, pointy)
    pointx += 1
    led.plot(pointx, pointy)
    if (pointx > 4) {
        led.unplot(pointx, pointy)
        pointx = 4
        led.plot(pointx, pointy)
    }
})
let buttony = 0
let buttonx = 0
let pointy = 0
let pointx = 0
pointx = randint(0, 4)
pointy = 4
buttonx = randint(0, 4)
buttony = 0
led.plot(pointx, pointy)
led.plot(buttonx, buttony)

