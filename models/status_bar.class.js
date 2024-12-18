class StatusBar extends DrawableObject{
    percentage = 100;

    IMAGES_HP = [
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
    ];

    costructor() {
        this.loadImages(this.IMAGES_HP);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let ImagePath = this.IMAGES_HP[this.resolveImageIndex()];
        this.img = this.imageCache[path];     
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if 
            (this.percentage > 80) {
                return 4;
        } else if 
            (this.percentage > 60) {
                return 3;
        } else if 
            (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}