class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;

    constructor(imagePath, x) {
        super().loadImg(imagePath);
        this.x = x;
        this.y = 480 - this.height; // canvas height - img height 
    }

}