class Level {
    // define level objects
    enemies;
    endBoss;
    clouds;
    backgroundObjects;
    bottles;
    coins;

    // define end of accessable area in a level 
    level_end_x = 720*2.1;

    // always keep the right, same in level[i].js files
    constructor(enemies, endBoss, clouds, backgroundObjects, bottles, coins) {
        this.enemies = enemies;
        this.endBoss = endBoss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.coins = coins;
    }
}