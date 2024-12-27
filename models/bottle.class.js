class SalsaBottle extends DrawableObject {
    

    constructor () {
        super().loadImg('./img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = 500 + Math.random()  * 700 * 2;
    }

    collectBottle () {
        
    }

    
}