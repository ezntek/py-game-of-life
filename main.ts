input.onButtonPressed(Button.A, function on_button_pressed_a() {
    gameOfLife()
})
let lifeChart = images.createImage(`
. . . . .
. . . . .
. . . . .
. . . . .
. . . . .
`)

let state = [false | _ <- [0..25]]
function getState(arr: any, x: number, y: number): boolean {
    return arr[x * 5 + y]
}

function setState(arr: any, x: number, y: number, value: boolean) {
    arr[x * 5 + y] = value
}

function reset() {
    for (let x = 1; x < 5; x++) {
        for (let y = 1; y < 5; y++) {
            setState(state, x, y, Math.randomBoolean())
        }
    }
}

function show() {
    for (let x = 1; x < 5; x++) {
        for (let y = 1; y < 5; y++) {
            lifeChart.setPixel(x, y, getState(state, x, y))
        }
    }
    lifeChart.plotImage(0)
}

function gameOfLife() {
    let count = 0
    for (let x = 1; x < 5; x++) {
        for (let y = 1; y < 5; y++) {
            count = 0
            if (x + 1 < 5) {
                if (getState(state, x + 1, y)) {
                    count += 1
                }
                
                if (y + 1 < 5 && getState(state, x + 1, y + 1)) {
                    count += 1
                }
                
                if (y - 1 >= 5 && getState(state, x + 1, y + 1)) {
                    count += 1
                }
                
            }
            
            if (x - 1 >= 0) {
                if (getState(state, x - 1, y)) {
                    count += 1
                }
                
                if (y + 1 < 5 && getState(state, x - 1, y + 1)) {
                    count += 1
                }
                
                if (y - 1 >= 0 && getState(state, x - 1, y - 1)) {
                    count += 1
                }
                
            }
            
        }
    }
}

