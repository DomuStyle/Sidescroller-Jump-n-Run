class Boss1 extends MovableObject {
    height = 300;
    width = 300;
    y = 150;
    // bossHealthpoints = 100;
    speed = 4;

    
    // offset for more precise collision detection
    offset = {
        x: 30, 
        y: 60,
        width: 40,
        height: 90,
    }

    IMAGES_WALKING = [
        './img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G1.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G2.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G3.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    IMAGES_ALERT = [
        './img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G5.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G6.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G7.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G8.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G9.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G10.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G11.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_ATTACK = [
        './img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G13.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G14.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G15.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G16.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G17.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G18.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G19.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    IMAGES_HURT = [
        './img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G21.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G22.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_DEAD = [
        './img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G24.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G25.png',
        './img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    IMAGE_DEAD = './img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png';

    boss_starting_sound = new Audio('assets/audio/enemy/bossChicken/endBoss_starting_sound.mp3');
    boss_dying_sound = new Audio('assets/audio/enemy/bossChicken/endBoss_dying_sound.mp3');

    constructor(world) {
        super().loadImg(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 1700;
        this.animate();
    }

    animate() {
        setInterval( ()=> {
                this.moveLeft();
                this.imageSequence(this.IMAGES_WALKING); // imageSequence is handeled in parent 
        }, 1000 / 4);

        setInterval(() => {
            if (this.isBossDead()) {
                this.imageSequence(this.IMAGES_DEAD);
                this.boss_dying_sound.volume = 0.025;
                this.boss_dying_sound.play();
                this.boss_dying_sound.loop = false;
                // this.showDead();
            }
        
        }, 200);
        }

    showDead() {
        // set dead animation
        this.loadImg(this.IMAGE_DEAD);
        // stop moving the character
        this.speed = 0;
    }
}