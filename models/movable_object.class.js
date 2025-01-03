class MovableObject extends DrawableObject{  
    speed = 0.15;
    otherDirection = false;
    speedY = 0; // defines the falling speed of objects at falling start
    acceleration = 2.5; // defines the gravity acceleraion of objects
    healthPoints = 100; // set HP of MovableObject
    enemyHealthpoints = 100;
    bossHealtpoints = 100;

    lastHit = 0;
    damage_sound = [];

    threshold = 5000;
    currentTime = Date.now();

    constructor() {
        super();
    }

    applyGravity() {
        setInterval( ()=> {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            } 
        }, 1000 / 25);
    }
    
    isAboveGround() {
        if (this instanceof ThrowableObject ) { // throwableObject´s should always fall
            return true;
        }
        return this.y < 205;
        
    }

    isColliding (mo) {
        return this.x + this.offset.x + this.width - this.offset.width > mo.x + mo.offset.x &&
            this.y + this.offset.y + this.height - this.offset.height > mo.y + mo.offset.y &&
            this.x + this.offset.x < mo.x+ mo.offset.x  + mo.width - mo.offset.width &&
            this.y + this.offset.y < mo.y + mo.offset.y + mo.height - mo.offset.height;
    }
       
    // set enemy damage
    hit() {
        this.healthPoints -= 3;
        if (this.healthPoints < 0 ) {
            this.healthPoints = 0;  
        } 
        else {
            this.lastHit = new Date().getTime();
        } 
    }

    jumpHit() {
        this.enemyHealthpoints -= 100;
        if (this.enemyHealthpoints < 0) {
            this.enemyHealthpoints = 0;
        } 
        // console.log(this.healthPoints);
    }

    bottleHitEnemy() {
        this.enemyHealthpoints -= 50;
        console.log('Collision with enemy, new enemy hp', this.enemyHealthpoints);
    }

    bottleHitBoss() {
        this.bossHealtpoints -= 20;
        console.log('Collision with boss, new boss hp', this.bossHealtpoints);
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // difference between hit and lastHit in (ms)
        timePassed = timePassed / 1000; // difference in (sec)
        
        // console.log(timePassed);
        
        return timePassed < 1; // returns "true" if timePassed is < 5   
    }

    damageSound() {
        // stop all sounds first
        for (let index = 0; index < this.damage_sound.length; index++) {
            if (!this.damage_sound[index].paused) {
                this.damage_sound[index].pause();
                this.damage_sound[index].currentTime = 0; // reset to beginning
            }
        }
    
        let randomIndex = Math.floor(Math.random() * this.damage_sound.length);
        let selectedAudio = this.damage_sound[randomIndex];
        selectedAudio.playbackRate = 1.75;
        selectedAudio.volume = 0.2;
        selectedAudio.play();
    }
    
    isDead() {
        return this.healthPoints == 0;   
    }

    isEnemyDead() {
        return this.enemyHealthpoints == 0;
    }

    imageSequence(images) {
        let i = this.currentImage % images.length; // modulu operator, creates i for each item and starts over again after reaching last item
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
    
    moveRight() {
        this.x += this.speed;
        // console.log('moving right');  
    }

    moveLeft() {
        this.x -= this.speed;
        // console.log('moving left');
    }

    // set jump height
    jump(){
        this.speedY = 30;
        this.jump_sound.volume = 0.025; 
        this.jump_sound.play(); 
    }
}