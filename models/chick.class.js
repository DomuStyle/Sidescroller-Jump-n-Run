class Chick extends MovableObject {
    height = 60;
    width = 60;
    y = 365;

    // New properties for spawn area
    xStart = 300; // Start point for spawning
    xEnd = 1400;
    
    // offset for more precise collision detection
    offset = {
        x: 10,
        y: 10,
        width: 15,
        height: 15,
    }
    // reset image orientation
    otherDirection = true;

    IMAGES_WALKING = [
        './img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        './img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        './img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    currentImage = 0;
    constructor() {
        super().loadImg('./img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        // Use the new properties to set spawn position
        this.x = this.xStart + Math.random() * (this.xEnd - this.xStart);
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        let moveDirection = 1; // 1 for moving right, -1 for moving left
    
        setInterval(() => {
            // move the chicken based on current move direction
            this.x += this.speed * moveDirection;
    
            // make sure chicken stays within defined boundaries
            if (this.x <= this.xStart) {
                moveDirection = 1;  // Move right if at the start boundary
                this.otherDirection = true; // Ensure chicken faces left when moving left
            } else if (this.x >= this.xEnd) {
                moveDirection = -1; // Move left if at the end boundary
                this.otherDirection = false; // make sure chicken faces right when moving right
            }
        }, 1000 / 60); // 60 fps
    
        setInterval(() => {
            // change direction randomly between 1 to 2 seconds
            if (Math.random() < 0.5) {
                moveDirection *= -1; // Flip the direction
                this.otherDirection = !this.otherDirection; // Flip the image
            }
        }, 1000 + Math.random() * 1000);
    
        // animation for walking
        setInterval(() => {
            this.imageSequence(this.IMAGES_WALKING);
        }, 200);
    }
}