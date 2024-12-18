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

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this; 
         
    }

    checkCollisions() {
        setInterval( ()=> {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy) ) {
                    this.character.hit();
                    // console.log('collision with Character, HP', this.character.healthPoints);
                }
            });
        }, 1000 / 5); // (1 Second) = 1000 / 5 = (frames per Second)
    }
    
    // defines how the content gets drawn onto the canvas. ! respect order !
    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.addToMap(this.character);

        this.addObjectsToMap(this.level.enemies);

        this.addObjectsToMap(this.level.clouds);

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
        // draw recatngle around Movable Objects
        mo.drawBorder(this.ctx);

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

