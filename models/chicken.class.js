class Chicken extends MovableObject {
    height = 60;
    width = 60;
    y = 365;
    speed = 5.5;
    enemyHealthpoints = 100;

    // handling img flip
    otherDirection = true;

    // properties for spawn area
    xStart = 200; // Start point for spawning
    xEnd = 1400;

    // offset for more precise collision detection
    offset = {
        x: 5,
        y: 5,
        width: 10,
        height: 15,
    }

    IMAGES_WALKING = [
        './img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGE_DEAD = './img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png';
        
    currentImage = 0;

    // define & add new sounds for character here
    chicken_sound = new Audio('assets/audio/enviorement/chicken_ambient_sound1.mp3');
    chicken_dying_sound = new Audio('assets/audio/enemy/chicken/chicken_dying1.mp3');

    constructor() {
        super().loadImg('./img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImg(this.IMAGE_DEAD);
        
        // use properties to set spawn position
        this.x = this.xStart + Math.random() * (this.xEnd - this.xStart);
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        // this.chicken_sound.play();
        this.chicken_sound.volume = 0.025;


        let moveDirection = 1; // 1 for moving right, -1 for moving left
    
        setInterval(() => {
            // move chicken based on current move direction
            this.x += this.speed * moveDirection;
    
            // make sure chicken stays within defined boundaries
            if (this.x <= this.xStart) {
                moveDirection = 1;  // move right if at the start boundary
                this.otherDirection = true; // make sure chicken faces left when moving right
            } else if (this.x >= this.xEnd) {
                moveDirection = -1; // move left if at the end boundary
                this.otherDirection = false; // make sure chicken faces right when moving left
            }
        }, 1000 / 60); // 60 fps
    
        setInterval(() => {
            // change direction randomly between 1 to 2 seconds
            if (Math.random() < 0.5) {
                moveDirection *= -1; // flip the direction
                this.otherDirection = !this.otherDirection; // flip the image
            }
        }, 1000 + Math.random() * 1000);
    
        // animation for walking
        setInterval(() => {
            this.imageSequence(this.IMAGES_WALKING);
        }, 200);

        setInterval(() => {
            if (this.enemyHealthpoints <= 0) {
                this.chicken_dying_sound.volume = 0.025;  
                this.chicken_dying_sound.play();
                this.chicken_dying_sound.loop = false;
                this.showDead();
            }
            
        }, 200);
    }

    showDead() {
        // set dead animation
        this.loadImg(this.IMAGE_DEAD);
        // stop moving the character
        this.speed = 0;
        this.enemies.splice(index, 1);
    }
}