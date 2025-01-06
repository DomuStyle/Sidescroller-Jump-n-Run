class World {

    character = new Character();
    level = level1;
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    bottles = level1.bottles;
    coins = level1.coins;
    endBoss = level1.endBoss;

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
    
    // game sounds

    cracking_bottle_sound = new Audio('./assets/audio/throwables/bottles/cracking-smashing-bottle1.mp3')
    // background_sound = new Audio('assets/audio/enviorement/saloonpianoloop2.mp3');
    
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
        this.checkJumpCollision();
        this.checkBottleEnemyCollisions();
        this.checkBottleBossCollisions();
    }

    setWorld() {
        this.character.world = this; 
    }

    // method for seperate handling of collision detections
    run() {
        setInterval( ()=> {
            // check collisions
            this.checkCollisions();
            this.checkThrowObject();
            this.checkBottleCollisions();
            this.checkCoinCollisions();
            this.checkJumpCollision();
            this.checkBottleEnemyCollisions();
            this.checkBottleBossCollisions();
        }, 50); // (1 Second) = 1000 / 5 = (frames per Second)
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) ) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.healthPoints);
                console.log('collision with Character, HP', this.character.healthPoints);
            }
        });
    }

    checkJumpCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.isJumping()) {
                    enemy.jumpHit();
                    // this.character.speedY = 30;
                    // console.log('collision with enemy, HP', enemy.enemyHealthpoints);
                         // remove the dead enemy from the array        
            }
        });
    }

    playBottleCrackSound() {
        this.cracking_bottle_sound.volume = 1.5;
        this.cracking_bottle_sound.play();
        this.cracking_bottle_sound.loop = false;
    }

    // check bottle collision and collecting
    checkBottleCollisions() {
        // loop through each bottle in the level
        this.level.bottles.forEach((bottle, index) => {
            // check if character is colliding with the current bottle
            if (this.character.isColliding(bottle)) {
                // add bottle tothrowableObjects array with its index for reference
                this.addBottleToInventory(bottle, index);
                // remove bottle from the level after it's been collected
                this.removeBottleFromLevel(index);
                this.statusBarBottles.setBottles(this.collectedBottles);
                // console.log('Collision with Bottle, collected');
            }
        });
    }

    checkBottleBossCollisions() {
        this.level.endBoss.forEach((boss) => {
            this.throwableObjects.forEach((bottle) => {
                // check if enemy is colliding with the current bottle
            if (bottle.isColliding(boss)) {
                // remove tbottle from level
                this.removeBottleFromLevel(bottle);
                console.log('New bottle count', this.level.throwableObjects);
                // deal damage on enemy
                boss.bottleHitBoss();
                // this.playBottleCrackSound();
                // update StatusBarBottles
                
            }}); 
        });
    }

    checkBottleEnemyCollisions() {
        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach((bottle) => {
                // check if enemy is colliding with the current bottle
            if (bottle.isColliding(enemy)) {
                // remove tbottle from level
                this.removeBottleFromLevel(bottle);
                // deal damage on enemy
                enemy.bottleHitEnemy();
                // this.playBottleCrackSound();
            } else if (enemy.enemyHealthpoints == 0) {
                this.removeEnemyFromLevel();
            }}); 
        });
    }

    addBottleToInventory(bottle, index) {
        // add bottle to the throwable objects array with its index
        this.collectedBottles.push({bottle, index });
        // console.log('Bottle added to inventory. Total:', this.collectedBottles.length);
    }

    removeEnemyFromLevel(index) {
        this.level.enemies.splice(index, 1);
    }

    removeBottleFromLevel(index) {
        // remove bottle from the level's bottles array
        this.level.bottles.splice(index, 1);
    }
    
    removeBottleFromHit(index) {
        this.throwableObjects.splice(index, 1);
    }

    checkThrowObject() {
        if (this.keyboard.THROW && this.collectedBottles.length > 0) {
            this.collectedBottles.pop();
            let bottle = new ThrowableObject(this.character.x + 60, this.character.y + 90);
            this.throwableObjects.push(bottle);
            this.statusBarBottles.setBottles(this.collectedBottles);
            // console.log('Bottle thrown. Remaining:', this.collectedBottles.length);
        } else if (this.keyboard.THROW) {
            // console.log('No bottles to throw!');
        }
    }

    // check coin collision and collecting
    checkCoinCollisions() {
        // loop through each coin in level
        this.level.coins.forEach((coin, index) => {

            // check if character is colliding with current bottle
            if (this.character.isColliding(coin)) {
                // add bottle to the throwableObjects array with index for reference
                this.addCoinToInventory(coin, index);
                // remove the bottle from the level after it's been collected
                this.removeCoinFromLevel(index);
                // console.log('Collision with Coin, collected');
            }
        });
    }

    addCoinToInventory(coin, index) {
        // Add the bottle to the throwable objects array with its index
        this.collectedCoins.push({coin, index });
        // Optionally, you could update a UI or status bar here if needed
        // console.log('Coin added to inventory. Total:', this.collectedCoins.length);
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
        this.addObjectsToMap(this.level.endBoss);
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

