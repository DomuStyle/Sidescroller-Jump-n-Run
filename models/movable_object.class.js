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
    acceleration = 1; // defines the gravity acceleraion of objects

    applyGravity() {
        setInterval( ()=> {
            // 180 creates a floor to fall on at y = 180;
            if (this.isAboveGround()) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            } 
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 210;
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
            let i = this.currentImage % this.IMAGES_WALKING.length; // modulu operator, creates i for each item and starts over again after reaching last item
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

    moveRight() {
        console.log('moving right');  
    }

    moveLeft() {
        setInterval( ()=> {
        this.x -= this.speed;
        }, 1000 / 60);
        console.log('moving left');
    }
}