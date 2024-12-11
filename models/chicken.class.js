class Chicken extends MovableObject {
    
    constructor() {
        super().loadImg('./img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/1_w.png');

        this.x = 200 + Math.random() * 500; // spawn range starts at 200, gen. random until 700
        this.y = 250;
        this.height = 70;
        this.width = 70;
    }
}