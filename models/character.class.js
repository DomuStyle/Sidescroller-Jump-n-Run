class Character extends MovableObject {
    height = 220;
    width = 100
    y = 110;
    speed = 2.5;

    IMAGES_WALKING = [
            './img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
            './img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
            './img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
            './img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
            './img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
            './img_pollo_locco/img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        './img_pollo_locco/img/2_character_pepe/3_jump/J-31.png',
        './img_pollo_locco/img/2_character_pepe/3_jump/J-32.png',
        './img_pollo_locco/img/2_character_pepe/3_jump/J-33.png',
        './img_pollo_locco/img/2_character_pepe/3_jump/J-34.png',
        './img_pollo_locco/img/2_character_pepe/3_jump/J-35.png',
        './img_pollo_locco/img/2_character_pepe/3_jump/J-36.png',
        './img_pollo_locco/img/2_character_pepe/3_jump/J-37.png',
        './img_pollo_locco/img/2_character_pepe/3_jump/J-38.png',
        './img_pollo_locco/img/2_character_pepe/3_jump/J-39.png'
    ];

    world;
    // define & add new sounds for character here
    walking_sound = new Audio('assets/audio/character/walking-on-gravel_by_sounddesignforyou.mp3');
    
    constructor() {
        super().loadImg('./img_pollo_locco/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();
        this.animate();
    }

    animate() {  
        setInterval( ()=> {
            this.walking_sound.pause();
            // set playbackspeed of adio to match content behavior & movement
            this.walking_sound.playbackRate = 3;
            // set volume of walking_sound
            this.walking_sound.volume = 0.2; 
            // walk right animation
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
                 // set speed of audio to match content behavior
            }
            // console.log(this.world.level.level_end_x);
            
            // walk left animation && limit levelStartBorder left side. &&
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
                // this.walking_sound.playbackRate = 2.75;
            }
            
            
            // handling jump action
            console.log(this.world.keyboard.SPACE);
            // console.log(isAboveGround());
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                // this.keyboard.SPACE = false;
                
                
            }
            
            this.world.camera_x = -this.x + 50;
        }, 1000 / 60);

        

        //handle character animations
        setInterval( ()=> {
            if (this.isAboveGround()) {
                this.imageSequence(this.IMAGES_JUMPING);
            } else {
            //walk animation
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.imageSequence(this.IMAGES_WALKING);
            }
        }
        }, 50);
        
    }
}