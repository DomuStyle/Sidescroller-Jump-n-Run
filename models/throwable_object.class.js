class ThrowableObject extends MovableObject{
    

    IMAGES_SALSA_BOTTLE = [

    ];

    constructor (x , y) {
        super().loadImg('./img_pollo_locco/img/6_salsa_bottle/salsa_bottle.png');
        this.IMAGES_SALSA_BOTTLE;
        this.x = x;
        this.y = y;
        this.height = 75;
        this.width = 75;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval( ()=> {
            this.x += 10;
        }, 1000 / 25);
    }

}