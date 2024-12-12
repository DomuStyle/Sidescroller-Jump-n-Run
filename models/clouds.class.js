class Clouds extends MovableObject {
    y = 20; // const values
    height = 340;
    width = 470;

    constructor() {
        super().loadImg('./img_pollo_locco/img/5_background/layers/4_clouds/1.png');

        this.x = -150 + Math.random() * 500; // spawn range starts at -150, gen. random pos. until 700
        this.animate();
    }

    animate() {
        this.moveLeft();
    }

    moveLeft() {
        setInterval( ()=> {
        this.x -= 0.1;
        }, 1000 / 60);
    }
}