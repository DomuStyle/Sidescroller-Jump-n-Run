class Character extends MovableObject {

    //character dimensions
    height = 220;
    width = 100
    y = 120;
    speed = 2.5;

    // character stats
    healthPoints = 100;

    bottlesCollected = 0;
    coinsCollected = 0;
    
    // define offset for more precise collision detection
    offset = {
        x: 18,
        y: 95,
        width: 35,
        height: 100,
    }

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

    IMAGES_IDLE = [
        './img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png',
        './img_pollo_locco/img/2_character_pepe/1_idle/idle/I-2.png',
        './img_pollo_locco/img/2_character_pepe/1_idle/idle/I-3.png',
        './img_pollo_locco/img/2_character_pepe/1_idle/idle/I-4.png',
        './img_pollo_locco/img/2_character_pepe/1_idle/idle/I-5.png',
        './img_pollo_locco/img/2_character_pepe/1_idle/idle/I-6.png',
        './img_pollo_locco/img/2_character_pepe/1_idle/idle/I-7.png',
        './img_pollo_locco/img/2_character_pepe/1_idle/idle/I-8.png',
        './img_pollo_locco/img/2_character_pepe/1_idle/idle/I-9.png',
        './img_pollo_locco/img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    IMAGES_DEAD = [
        './img_pollo_locco/img/2_character_pepe/5_dead/D-51.png',
        './img_pollo_locco/img/2_character_pepe/5_dead/D-52.png',
        './img_pollo_locco/img/2_character_pepe/5_dead/D-53.png',
        './img_pollo_locco/img/2_character_pepe/5_dead/D-54.png',
        './img_pollo_locco/img/2_character_pepe/5_dead/D-55.png',
        './img_pollo_locco/img/2_character_pepe/5_dead/D-56.png',
        './img_pollo_locco/img/2_character_pepe/5_dead/D-57.png'
    ];

    IMAGES_HURT = [
        './img_pollo_locco/img/2_character_pepe/4_hurt/H-41.png',
        './img_pollo_locco/img/2_character_pepe/4_hurt/H-42.png',
        './img_pollo_locco/img/2_character_pepe/4_hurt/H-43.png'
    ];

    // define & add new sounds for character here
    walking_sound = new Audio('assets/audio/character/walking-on-gravel_by_sounddesignforyou.mp3');
    
    damage_sound = [
        new Audio('assets/audio/character/ouch1.mp3'),
        new Audio('assets/audio/character/ouch2.mp3'),
        new Audio('assets/audio/character/ouch3.mp3')
    ];

    constructor() {
        super().loadImg('./img_pollo_locco/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.applyGravity();
        this.animate();
    }

    animate() {  
        setInterval( ()=> {

            this.walking_sound.pause();
            // set playbackspeed of adio to match content behavior & movement
            this.walking_sound.playbackRate = 1.75;
            // set volume of walking_sound
            this.walking_sound.volume = 0.2; 
            // walk right animation
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.walking_sound.play();
            }
            
            // walk left animation && limit levelStartBorder left side. &&
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.walking_sound.play();
            }
            
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
            
            this.world.camera_x = -this.x + 50;
        }, 1000 / 60);

        setInterval( ()=> {
            if (this.isDead()) {
                this.imageSequence(this.IMAGES_DEAD);
            } else if (this.isHurt()){
                this.damageSound();
                this.imageSequence(this.IMAGES_HURT);
            }
        }, 1000 / 8);  

        setInterval( ()=> {
            if (this.isAboveGround()) {
                this.IMAGES_JUMPING
            } else {
            //walk animation
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                        this.imageSequence(this.IMAGES_WALKING);
                }
            }
        }, 1000 / 8);
    }    
}       