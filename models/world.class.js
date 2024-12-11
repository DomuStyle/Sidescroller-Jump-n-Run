class World {

    character = new Character();

    enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken(),
    ]

    clouds =  [
        new Clouds(),
    ];

    backgroundObjects = [
        new BackgroundObject('./img_pollo_locco/img/5_background/layers/2_second_layer/1.png', 0, 270),
    ];

    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.addToMap(this.character);

        this.addObjectsToMap(this.enemies);
        // this.enemies.forEach(enemy => {
        //     this.addToMap(enemy);
        // });

        this.addObjectsToMap(this.clouds);
        // this.clouds.forEach(cloud => {
        //     this.addToMap(cloud);
        // });

        this.addObjectsToMap(this.backgroundObjects);
        // this.backgroundObjects.forEach(object => {
        //     this.addToMap(object);
        // });

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }
    
    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) { 
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}

