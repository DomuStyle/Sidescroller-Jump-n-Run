class SalsaBottle extends DrawableObject {
    height = 75;
    width = 75;
    y = 360;

    offset = {
        x: 35,
        y: 10,
        width: 50,
        height: 20,
    }

    constructor () {
        super().loadImg('./img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = 500 + Math.random()  * 1100;
    }

    collectBottle () {
        
    }

    
}