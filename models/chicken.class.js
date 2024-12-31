class Chicken extends MovableObject {
    height = 60;
    width = 60;
    y = 365;

    // handling img flip
    otherDirection = false;
    
    // New properties for spawn area
    xStart = 200; // Start point for spawning
    xEnd = 1400;

    // offset for more precise collision detection
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    }

    IMAGES_WALKING = [
        './img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    currentImage = 0;
    constructor() {
        super().loadImg('./img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        // Use the new properties to set spawn position
        this.x = this.xStart + Math.random() * (this.xEnd - this.xStart);
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
        this.changeDirection();
    }

    animate() {
        // call moveLeft within a defined interval
        setInterval( ()=> {
            this.moveLeft();
        }, 1000 / 60);
        

        setInterval( ()=> {
            // imageSequence handeled in parent 
            this.imageSequence(this.IMAGES_WALKING);
        }, 200);

        // Add method to change direction randomly
        this.changeDirectionInterval = setInterval(() => {
            this.changeDirection();
        }, (Math.random() * 1000) + 1000); // Between 1 and 2 seconds
        
    }

    // New method for changing direction
    changeDirection() {
        let directions = ['left', 'right'];
        let newDirection = directions[Math.floor(Math.random() * directions.length)];
        
        if (newDirection === 'left') {
            this.moveLeft = () => { this.x -= this.speed; };
        } else {
            this.moveLeft = () => { this.x += this.speed; }; // rename to moveRight for clarity if you want
        }

        // Clear existing interval and set a new one for direction change
        clearInterval(this.changeDirectionInterval);
        this.changeDirectionInterval = setInterval(() => {
            this.changeDirection();
        }, (Math.random() * 1000) + 1000);
    }
}