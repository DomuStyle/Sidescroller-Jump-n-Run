class Boss1 extends MovableObject {
    height = 300;
    width = 300;
    y = 150;


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
        './img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    constructor() {
        super().loadImg(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 1700;
        this.animate();
    }

    animate() {
    setInterval( ()=> {
        // imageSequence i handeled in parent 
        this.imageSequence(this.IMAGES_WALKING);
    }, 200);
    }
}