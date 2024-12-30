class CoinCounter extends DrawableObject {

    constructor() {
        super();
        this.loadImg('./img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png'); // preload image
        this.x = 40;
        this.y = 32.5;
        this.width = 200;
        this.height = 60;
        this.coinCount = 0;
     } 

      // Method to update the coin count
    updateCoinCount(newCount) {
        this.coinCount = newCount;
    }

    // Override the draw method from DrawableObject
    draw(ctx) {
        try {
            // First, draw the background image as before
            super.draw(ctx);
            
            // Now, draw the coin count over it
            ctx.font = "18px Arial";
            ctx.fillStyle = "Black";
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.fillText(this.coinCount, this.x + 100, this.y + 41);
        } catch (error) {
            console.warn('Error drawing coin counter', error);
            console.log('Could not draw coin counter', this.img.src);
        }
    }
}