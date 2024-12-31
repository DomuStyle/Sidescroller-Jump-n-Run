class StatusBarBottles extends DrawableObject {

    IMAGES_BOTTLES = [
        './img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        './img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        './img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        './img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        './img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        './img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];

    collectedBottles = [];

    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLES); // preload images
        this.setPercentage(0); // creates the IMAGES[path] for later use in resolveImageIndex
        this.x = 20;
        this.y = 65;
        this.width = 200;
        this.height = 60;
    }
    
    setBottles(collectedBottles) {
        this.collectedBottles = collectedBottles;
        let percentage = Math.min(this.collectedBottles.length * 20, 100);
        this.setPercentage(percentage);
    } 

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_BOTTLES[this.resolveImageIndex()];
        this.img = this.imageCache[path]; 
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}
