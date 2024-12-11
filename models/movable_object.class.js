class MovableObject {
    x = 120;
    y = 200;
    img;
    height = 150;
    width = 100;

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('moving right');  
    }

    moveLeft() {
        console.log('moving left');
    }
}