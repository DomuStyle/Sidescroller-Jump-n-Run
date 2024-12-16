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
    }

    setWorld() {
        this.character.world = this; 
         
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

        // if (mo.otherDirection) {
        //         this.flipImage(mo);
        //     }
        //     mo.draw(this.ctx);

        // if (mo.otherDirection) {
        //         this.flipImageBack(mo);
        //     }
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        this.ctx.beginPath();
        this.ctx.lineWidth = '5';
        this.ctx.strokeStyle = 'blue';
        this.ctx.rect(mo.x, mo.y, mo.x + mo.width, mo.y + mo.height);
        this.ctx.stroke();
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}

