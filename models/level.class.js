class Level {
    collectables;
    enemies;
    clouds;
    backgroundObjects;
    // define end of accessable area in a level 
    level_end_x = 720*2;

    constructor(collectables, enemies, clouds, backgroundObjects) {
        this.collectables = collectables;
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        // this.bottles = this.bottles;
    }
}