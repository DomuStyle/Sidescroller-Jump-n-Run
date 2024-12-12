class MovableObject {
    x = 120;
    y = 200;
    img;
    height = 150;
    width = 100;

    imageCache = {};

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }



    /**
     * 
     * @param {Array} array - ['img/image1.png', 'img/image2.png', ....]
     */

    loadImages(array) {
        array.forEach((path)=> {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
        
    }

    moveRight() {
        console.log('moving right');  
    }

    moveLeft() {
        console.log('moving left');
    }
}