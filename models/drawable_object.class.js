class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 250;
    width = 100;
    
    constructor() {

    }

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }
 
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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

    drawBorder(ctx) {
        // instanceOf adds drawBorder only to Char.& Chick.
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }  
    }
}