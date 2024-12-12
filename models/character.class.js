class Character extends MovableObject {
    height = 220;
    width = 100
    y = 210;

    IMAGES_WALKING = [
            './img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
            './img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
            './img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
            './img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
            './img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
            './img_pollo_locco/img/2_character_pepe/2_walk/W-26.png'
    ];

    currentImage = 0;

    constructor() {
        super().loadImg('./img_pollo_locco/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

            this.animate();
    }

    animate() {
        setInterval( ()=> {
            let i = this.currentImage % this.IMAGES_WALKING.length; // modulu operator, creates i for each item and starts over again after reaching last item
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200);
        
    }

    jump() {

    }
}