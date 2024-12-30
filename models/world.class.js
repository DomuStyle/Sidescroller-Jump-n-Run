class World {

    character = new Character();
    level = level1;
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    bottles = level1.bottles;
    coins = level1.coins;

    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    // status bars
    statusBar = new StatusBar();
    statusBarBottles = new StatusBarBottles();
    coinCounter = new CoinCounter();

    // Objects Cache
    collectedCoins = [];
    collectedBottles = [];
    throwableObjects = [];
    
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.checkBottleCollisions();
        this.checkCoinCollisions();
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
            this.checkBottleCollisions();
            this.checkCoinCollisions();
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

    // checkBottleCollisions() {
    //     this.level.bottles.forEach((bottle, index) => {
    //         if (this.character.isColliding(bottle) ) {
    //             this.throwableObjects.push();
    //             // this.statusBar.setPercentage(this.character.healthPoints);
    //             console.log('collision with Bottle, collected', this.throwableObjects);
    //         }
    //     });
    // }

    // check bottle collision and collecting
    checkBottleCollisions() {
        // Loop through each bottle in the level
        this.level.bottles.forEach((bottle, index) => {
            // Check if the character is colliding with the current bottle
            if (this.character.isColliding(bottle)) {
                // Add the bottle to the throwableObjects array with its index for reference
                this.addBottleToInventory(bottle, index);
                // Remove the bottle from the level after it's been collected
                this.removeBottleFromLevel(index);
                console.log('Collision with Bottle, collected');
            }
        });
    }

    addBottleToInventory(bottle, index) {
        // Add the bottle to the throwable objects array with its index
        this.collectedBottles.push({ bottle, index });
        // Optionally, you could update a UI or status bar here if needed
        console.log('Bottle added to inventory. Total:', this.collectedBottles.length);
    }

    removeBottleFromLevel(index) {
        // Remove the bottle from the level's bottles array
        this.level.bottles.splice(index, 1);
    }
    
    checkThrowObject() {
        if (this.keyboard.THROW) {
            let bottle = new ThrowableObject(this.character.x + 60, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    // check coin collision and collecting
    checkCoinCollisions() {
        // Loop through each bottle in the level
        this.level.coins.forEach((coin, index) => {
            // Check if the character is colliding with the current bottle
            if (this.character.isColliding(coin)) {
                // Add the bottle to the throwableObjects array with its index for reference
                this.addCoinToInventory(coin, index);
                // Remove the bottle from the level after it's been collected
                this.removeCoinFromLevel(index);
                console.log('Collision with Coin, collected');
            }
        });
    }

    addCoinToInventory(coin, index) {
        // Add the bottle to the throwable objects array with its index
        this.collectedCoins.push({coin, index });
        // Optionally, you could update a UI or status bar here if needed
        console.log('Coin added to inventory. Total:', this.collectedCoins.length);
    }

    removeCoinFromLevel(index) {
        // Remove the bottle from the level's bottles array
        this.level.coins.splice(index, 1);
    }

    // defines how the content gets drawn onto the canvas. ! respect right order !
    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.addToMap(this.character);

        this.addObjectsToMap(this.level.clouds);

        this.addObjectsToMap(this.throwableObjects);
        
        this.ctx.translate( -this.camera_x, 0); 

        // ------  space for fixed objects ----- //
        this.coinCounter.updateCoinCount(this.collectedCoins.length);
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarBottles);
        this.addToMap(this.coinCounter);

        this.ctx.translate(this.camera_x, 0); //

        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);

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

