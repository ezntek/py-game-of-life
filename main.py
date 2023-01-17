import Math.random_boolean

def on_button_pressed_a():
    gameOfLife()

input.on_button_pressed(Button.A, on_button_pressed_a)

lifeChart = images.create_image("""
. . . . .
. . . . .
. . . . .
. . . . .
. . . . .
""")

#state = [ False for i in range(1, 25)]
state = [False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, ]

def getState(arr: list[bool], x: int, y: int) -> bool:
    return arr[x * 5 + y]

def setState(arr: list[bool], x: int, y: int, value: bool):
    arr[x * 5 + y] = value

def reset():
    for x in range(1, 5):
        for y in range(1, 5):
            setState(state,  x, y, Math.random_boolean())


def show():
    for x in range(1, 5):
        for y in range(1, 5):
            lifeChart.set_pixel(x, y, getState(state, x, y))
    
    lifeChart.plot_image(0)

def gameOfLife():
    count = 0

    for x in range(1, 5):
        for y in range(1, 5):
            count = 0

            if((x + 1) < 5):
                if getState(state, x+1, y):
                    count += 1

                if (y + 1) < 5 and getState(state, x+1, y+1):
                    count += 1
                
                if (y - 1) >= 5 and getState(state, x+1, y+1):
                    count += 1
            
            if((x - 1) >= 0):
                if getState(state, x - 1, y):
                    count += 1
                
                if (y + 1 < 5) and getState(state, x - 1, y + 1):
                    count += 1
                
                if (y - 1 >= 0) and getState(state, x - 1, y - 1):
                    count += 1

            if 

                



