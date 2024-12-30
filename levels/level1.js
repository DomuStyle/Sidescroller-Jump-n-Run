const level1 = new Level(
    // create arrays in same order to match order of objects in level.class.js constructor (enemies, clouds, backgroundObjects)
    [
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Boss1()
    ],

    [
    new Clouds()
    ],

    [
    new BackgroundObject('./img_pollo_locco/img/5_background/layers/air.png', -719),
    new BackgroundObject('./img_pollo_locco/img/5_background/layers/3_third_layer/2.png', -719),
    new BackgroundObject('./img_pollo_locco/img/5_background/layers/2_second_layer/2.png', -719),
    new BackgroundObject('./img_pollo_locco/img/5_background/layers/1_first_layer/2.png', -719),
    new BackgroundObject('./img_pollo_locco/img/5_background/layers/air.png', 0),
    new BackgroundObject('./img_pollo_locco/img/5_background/layers/3_third_layer/1.png', 0),
    new BackgroundObject('./img_pollo_locco/img/5_background/layers/2_second_layer/1.png', 0),
    new BackgroundObject('./img_pollo_locco/img/5_background/layers/1_first_layer/1.png', 0),   
    new BackgroundObject('./img_pollo_locco/img/5_background/layers/air.png', 719),
    new BackgroundObject('./img_pollo_locco/img/5_background/layers/3_third_layer/2.png', 719),
    new BackgroundObject('./img_pollo_locco/img/5_background/layers/2_second_layer/2.png', 719),
    new BackgroundObject('./img_pollo_locco/img/5_background/layers/1_first_layer/2.png', 719),
    new BackgroundObject('./img_pollo_locco/img/5_background/layers/air.png', 719*2),
    new BackgroundObject('./img_pollo_locco/img/5_background/layers/3_third_layer/1.png', 719*2),
    new BackgroundObject('./img_pollo_locco/img/5_background/layers/2_second_layer/1.png', 719*2),
    new BackgroundObject('./img_pollo_locco/img/5_background/layers/1_first_layer/1.png', 719*2)      
    ],

    [
    new SalsaBottle('./img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
    new SalsaBottle('./img_pollo_locco/img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
    new SalsaBottle('./img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
    new SalsaBottle('./img_pollo_locco/img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
    new SalsaBottle('./img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
    new SalsaBottle('./img_pollo_locco/img/6_salsa_bottle/2_salsa_bottle_on_ground.png')
    ],

    [
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    ]
);