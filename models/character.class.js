class Character extends MovableObject {
    height = 220;
    width = 100
    y = 210;
    speed = 2.5;

    IMAGES_WALKING = [
            './img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
            './img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
            './img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
            './img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
            './img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
            './img_pollo_locco/img/2_character_pepe/2_walk/W-26.png'
    ];

    world;
    // define & add new sounds for character here
    walking_sound = new Audio('assets/audio/character/walking-on-gravel_by_sounddesignforyou.mp3');
    
    constructor() {
        super().loadImg('./img_pollo_locco/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

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
            console.log(this.world.level.level_end_x);
            
            // walk left animation && limit levelStartBorder on the left side. &&
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
                // this.walking_sound.playbackRate = 2.75;
            }
            this.world.camera_x = -this.x + 50;
        }, 1000 / 60);

        //walk animation
        setInterval( ()=> {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.imageSequence(this.IMAGES_WALKING);
        }
        }, 50);
        
    }

    jump() {

    }
}