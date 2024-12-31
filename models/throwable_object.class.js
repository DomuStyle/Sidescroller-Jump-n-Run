class ThrowableObject extends MovableObject{
    collectedBottles;

    IMAGES_SALSA_BOTTLE = [
        './img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './img_pollo_locco/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './img_pollo_locco/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './img_pollo_locco/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    constructor (x , y) {
        super().loadImg('./img_pollo_locco/img/6_salsa_bottle/salsa_bottle.png');
        this.IMAGES_SALSA_BOTTLE;
        this.x = x;
        this.y = y;
        this.height = 75;
        this.width = 75;
        this.throw();
        this.animate();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval( ()=> {
            this.x += 10;
        }, 1000 / 25);
    }

    animate() {
        // Animate the bottle if there are multiple images
        setInterval(() => {
            let index = this.currentImage % this.IMAGES_SALSA_BOTTLE.length;
            this.loadImg(this.IMAGES_SALSA_BOTTLE[index]);
            this.currentImage++;
        }, 1000 / 12); // 60 fps for animation
    }
}