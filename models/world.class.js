class World {

    character = new Character();
    level = level1;
    enemies = level1.enemies;

    clouds = level1.clouds;

    backgroundObjects = level1.backgroundObjects;

    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    statusBar = new StatusBar();
    statusBarBottles = new StatusBarCoins();

    throwableObjects = [];
    
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.run();
    }

    setWorld() {
        this.character.world = this; 
    }

    run() {
        setInterval( ()=> {
            // check collisions
            this.checkCollisions();
            this.checkThrowObject();
        }, 50); // (1 Second) = 1000 / 5 = (frames per Second)
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) ) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.healthPoints);
                // console.log('collision with Character, HP', this.character.healthPoints);
            }
        });
    }

    checkThrowObject() {
        if (this.keyboard.THROW) {
            let bottle = new ThrowableObject(this.character.x + 60, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    // defines how the content gets drawn onto the canvas. ! respect right order !
    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.addToMap(this.character);

        this.addObjectsToMap(this.level.clouds);

        this.addObjectsToMap(this.throwableObjects);
        
        this.ctx.translate( -this.camera_x, 0); //
        // ------  space for fixed objects ----- //
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarBottles);

        this.ctx.translate(this.camera_x, 0); //

        this.addObjectsToMap(this.level.enemies);

        this.ctx.translate( - this.camera_x, 0);
        

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }
    
    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) { 
        if (mo.otherDirection) {
           this.flipImage(mo);
        }

        mo.draw(this.ctx);

        // draw recatngle around Movable Objects for collisiondetection
        mo.drawBorder(this.ctx);
            mo.drawOffsetBorder(this.ctx);

        if (mo.otherDirection) {
            this.flipImageback(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageback(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}

