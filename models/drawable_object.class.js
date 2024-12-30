class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 250;
    width = 100;
    
    // offset for more precise collision detection
    offset = {
        x: 0,
        y: 0,
        width: 20,
        height: 0,
    }

    constructor() {

    }

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }
 
    draw(ctx) {
        try { // try´s to complete this line and add's failure context if line fails to execute
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch(error){ 
            console.warn('Error loading image', error);
            console.log('this image could not be loaded', this.img.src);
        }
        
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
        if (this instanceof Character || this instanceof Chicken || this instanceof SalsaBottle || this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawOffsetBorder(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Boss1 || this instanceof SalsaBottle || this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.x, 
                this.y + this.offset.y, 
                this.width - this.offset.width, 
                this.height - this.offset.height);
            ctx.stroke();
        }
    }
}