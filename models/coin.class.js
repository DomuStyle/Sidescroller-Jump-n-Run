class Coin extends DrawableObject {
    height = 75;
    width = 75;
    
    offset = {
        x: 25,
        y: 25,
        width: 50,
        height: 50,
    }

    IMAGES_COIN = [
        './img_pollo_locco/img/8_coin/coin_1.png',
        './img_pollo_locco/img/8_coin/coin_2.png'
    ];

    constructor () {
        super().loadImg('./img_pollo_locco/img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_COIN);
        this.x = 500 + Math.random()  * 1100;
        this.y = 70 + Math.random()  * 300;
    }
}