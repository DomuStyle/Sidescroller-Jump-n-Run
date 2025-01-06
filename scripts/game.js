let canvas;
let world;
let keyboard = new Keyboard;

let background_sound = new Audio('assets/audio/enviorement/saloonpianoloop2.mp3');

function startBackgroundSound() {
     background_sound.play();
     background_sound.volume = 0.05;
     background_sound.loop = true;
}

function toggleDNone() {
    let startImage = document.getElementById('start_img');
    let startButton = document.getElementById('start_btn');
    startImage.classList.toggle('d_none');
    startButton.classList.toggle('d_none');
}

function init() {
    
    initlevel1();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    toggleDNone();
    startBackgroundSound();
    
    // console.log('My character is', world.character);
    // console.log('My character is', world.enemies);
    // console.log('My character is', world.clouds);    
}

// let intervalIds = [];
let i = 1;

// function setStopInterval(fn, time) {
//     let id = setInterval(fn, time);
//     intervalIds.push(id);

// }

// setStopInterval(sayHello, 500);
// setStopInterval(sayGoodbye, 500);

// console.log(`ÌD von interval is:`, intervalIds);


// function stopGame() {
//     // end interval
//     // for (let index = 0; index < intervalIds.length; index++) {
//     //     const id = intervalIds[index];
//     //     clearInterval(id);
//     // }
    
//     intervalIds.forEach(clearInterval);
// }



// function sayHello () {
//     console.log(`Hello`, i);
//     i++; 
// }

// function sayGoodbye () {
//     console.log(`Goodbye`, i);
//     i++; 
// }

// quick and dirty function to atop all interval´s
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
    toggleDNone();
    soundOff();
}

function soundOff() {
    background_sound.pause();
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