class ThrowableObject extends MovableObject{
    

    IMAGES_SALSA_BOTTLE = [

    ];

    constructor () {
        super().loadImg('./img_pollo_locco/img/6_salsa_bottle/salsa_bottle.png');
        this.IMAGES_SALSA_BOTTLE;
        this.x = 100;
        this.y = 100;
        this.height = 75;
        this.width = 75;

        this.throw(100, 200);
    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();
        setInterval( ()=> {
            this.x += 10;
        }, 1000 / 25);
    }

}