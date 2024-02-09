wuerfel = 0

def on_forever():
    global wuerfel
    if input.button_is_pressed(Button.A):
        wuerfel = randint(1, 6)
        basic.show_number(wuerfel)
        basic.set_led_color(basic.rgb(255, 0, 255))
basic.forever(on_forever)
