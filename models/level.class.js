class Level {
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    // define end of accessable area in a level 
    level_end_x = 720*2;

    constructor(enemies, clouds, backgroundObjects, bottles) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
    }
}