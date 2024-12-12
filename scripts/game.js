let canvas;
let world;
let keyboard = new Keyboard;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    
    console.log('My character is', world.character);
    console.log('My character is', world.enemies);
    console.log('My character is', world.clouds);    
}

window.addEventListener('keydown', (event) => {

    if(event.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if(event.keyCode == 38) {
        keyboard.UP = true;
    }

    if(event.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if(event.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if(event.keyCode == 32) {
        keyboard.SPACE = true;
    }
console.log(event);

});

window.addEventListener('keyup', (event) => {

    if(event.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if(event.keyCode == 38) {
        keyboard.UP = false;
    }

    if(event.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if(event.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if(event.keyCode == 32) {
        keyboard.SPACE = false;
    }
console.log(event);

});