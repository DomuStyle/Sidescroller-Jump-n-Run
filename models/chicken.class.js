class Chicken extends MovableObject {
    height = 60;
    width = 60;
    y = 365;
    IMAGES_WALKING = [
        './img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    currentImage = 0;
    constructor() {
        super().loadImg('./img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 500; // spawn range starts at 200, gen. random until 700
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        this.moveLeft();

        setInterval( ()=> {
            // imageSequence i handeled in parent 
            this.imageSequence(this.IMAGES_WALKING);
        }, 200);
        
    }
}