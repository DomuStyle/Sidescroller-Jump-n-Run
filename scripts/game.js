let canvas;
let world;
let keyboard = new Keyboard;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    
    // console.log('My character is', world.character);
    // console.log('My character is', world.enemies);
    // console.log('My character is', world.clouds);    
}

window.addEventListener('keydown', (event) => {
    // movement keys
    if(event.key == "ArrowUp") {
        keyboard.UP = true;
    }

    if(event.key == "w") {
        keyboard.UP = true;
    }

    if(event.key == "ArrowLeft") {
        keyboard.LEFT = true;
    }

    if(event.key == "a") {
        keyboard.LEFT = true;
    }
    
    if(event.key == "ArrowDown") {
        keyboard.DOWN = true;
    }

    if(event.key == "s") {
        keyboard.DOWN = true;
    }

    if(event.key == "ArrowRight") {
        keyboard.RIGHT = true;
    }

    if(event.key == "d") {
        keyboard.RIGHT = true;
    }
    if(event.key == " ") {
        keyboard.SPACE = true;
    }

    // action keys 
    if(event.key == "t") {
        keyboard.THROW = true;
    }
// console.log(event);

});

window.addEventListener('keyup', (event) => {

    // movement keys
    if(event.key == "ArrowUp") {
        keyboard.UP = false;
    }

    if(event.key == "w") {
        keyboard.UP = false;
    }

    if(event.key == "ArrowLeft") {
        keyboard.LEFT = false;
    }

    if(event.key == "a") {
        keyboard.LEFT = false;
    }
    
    if(event.key == "ArrowDown") {
        keyboard.DOWN = false;
    }

    if(event.key == "s") {
        keyboard.DOWN = false;
    }

    if(event.key == "ArrowRight") {
        keyboard.RIGHT = false;
    }

    if(event.key == "d") {
        keyboard.RIGHT = false;
    }
    if(event.key == " ") {
        keyboard.SPACE = false;
    }

    // action keys 
    if(event.key == "t") {
        keyboard.THROW = false;
    }
// console.log(event);

});