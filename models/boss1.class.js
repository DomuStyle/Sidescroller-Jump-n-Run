class Boss1 extends MovableObject {
    height = 300;
    width = 300;
    y = 150;
    bossHealthpoints = 100;
    speed = 5;

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

    constructor() {
        super().loadImg(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 1700;
        this.animate();
    }

    animate() {
    setInterval( ()=> {
        // imageSequence is handeled in parent 
        this.moveLeft();
        this.imageSequence(this.IMAGES_WALKING);
    }, 150);
    }
}