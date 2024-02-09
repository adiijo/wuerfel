let pointy = 0
let pointx = 0
pointx = randint(0, 4)
pointy = randint(2, 4)
let buttonx = randint(0, 4)
let buttony = randint(0, 2)
led.plot(pointx, pointy)
led.plot(buttonx, buttony)
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    led.unplot(pointx, pointy)
    pointx += -1
    led.plot(pointx, pointy)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    led.unplot(pointx, pointy)
    pointx += 1
    led.plot(pointx, pointy)
})
 

input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function() {
  led.unplot(pointx,pointy)
  pointy += 1 
  led.plot(pointx,pointy) 
})

input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
  led.unplot(pointx, pointy)
  pointy += -1
  led.plot(pointx, pointy)  
})
