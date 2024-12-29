class SalsaBottle extends DrawableObject {
    height = 75;
    width = 75;
    y = 360;
    constructor () {
        super().loadImg('./img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = 500 + Math.random()  * 1400;
    }

    collectBottle () {
        
    }

    
}