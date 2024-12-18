class MovableObject {
    x = 120;
    img;
    height = 250;
    width = 100;
    speed = 0.15;
    imageCache = {};
    currentImage = 0;
    otherDirection = false;
    speedY = 0; // defines the falling speed of objects at falling start
    acceleration = 2.5; // defines the gravity acceleraion of objects
    healthPoints = 100; // set HP of MovableObject
    lastHit = 0;

    applyGravity() {
        setInterval( ()=> {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            } 
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 205;
    }

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }
 
    // /**
    //  * 
    //  * @param {Array} array - ['img/image1.png', 'img/image2.png', ....]
    //  */

    imageSequence(images) {
            let i = this.currentImage % images.length; // modulu operator, creates i for each item and starts over again after reaching last item
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
    }

    loadImages(array) {
        array.forEach((path)=> {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
        
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawBorder(ctx) {
        // instanceOf adds drawBorder only to Char.& Chick.
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
        
    }

    // charcter.isColiding chicken
    isColliding (mo) {
        return  this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x && 
            this.y < mo.y + mo.height;         
    }
    
    
    // set enemy damage
    hit() {
        this.healthPoints -= 5;
        if (this.healthPoints < 0 ) {
            this.healthPoints = 0;  
        } 
        else {
            this.lastHit = new Date().getTime();
        }
        
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // difference between hit and lastHit in (ms)
        timePassed = timePassed / 1000; // difference in (sec)
        // console.log(timePassed);
        
        return timePassed < 1; // returns "true" if timePassed is < 5
    }
    
    isDead() {
        return this.healthPoints == 0;   
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
        this.speedY = 25; 
    }
}