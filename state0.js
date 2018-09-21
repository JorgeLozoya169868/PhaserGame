var demo = {}, centerX = 50, centerY= 500, Predator, speed = 5;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.image('Dino','assets/sprites/Dino.png');
        game.load.image('verde','assets/sprites/vita.gif');
        game.load.spritesheet('Predator','assets/spritesheets/DinoSpriteRed.png',240,240);
        game.load.image('Street','assets/backgrounds/cyberpunkstreet.png');
        
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE); //Agregar physics en las primeras lineas
        game.stage.backgroundColor = '#800080';
        console.log('state0 yeii');
        addChangeStateEventListeners(); 
        game.scale.scaleMode = Phaser.ScaleManager.Show_ALL;
        game.world.setBounds(0, 0, 1900, 600);
        var CyberStreet = game.add.sprite(0,0, 'Street'); //background

       Predator = game.add.sprite(centerX, centerY, 'Predator' );
        Predator.anchor.setTo(0.5, 0.5); //not sure,  centerx y centerY, para colocarlo
        Predator.scale.setTo(0.7, 0.7); //tamaño
        
        game.physics.enable(Predator);
        Predator.body.collideWorldBounds = true;
        Predator.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7]);
    
        //DeadZone
        game.camera.follow(Predator);
        game.camera.deadzone = new Phaser.Rectangle(200, 0, 300, 100); //dibujar el rectangulo,(zone.x, zone.y, zone.width, zone.height)
    },
    update: function(){
       if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
           Predator.scale.setTo(0.7,0.7); //tamaño y direccion
           Predator.x += speed;
           Predator.animations.play('walk', 14, true);
       }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            Predator.scale.setTo(-0.7,0.7); //tamaño y direccion
           Predator.x -= speed;
            Predator.animations.play('walk', 14, true);
       }
        else{
            Predator.animations.stop('walk');
            Predator.frame = 0;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
           Predator.y -= speed;
            if (Predator.y < 440){
                Predator.y = 440; //Mantener a raya al predator del background
            }
       }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
           Predator.y += speed;
       }
    }
    
}

function changeState(i, stateNum){
    game.state.start('state'+ stateNum);
}
function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}
function addChangeStateEventListeners(){
    addKeyCallback(Phaser.Keyboard.ZERO, changeState,0);
        addKeyCallback(Phaser.Keyboard.ONE, changeState,1);
        addKeyCallback(Phaser.Keyboard.TWO, changeState,2);
        addKeyCallback(Phaser.Keyboard.THREE, changeState,3);
        addKeyCallback(Phaser.Keyboard.FOUR, changeState,4);
        addKeyCallback(Phaser.Keyboard.FIVE, changeState,5);
        addKeyCallback(Phaser.Keyboard.SIX, changeState,6);
        addKeyCallback(Phaser.Keyboard.SEVEN, changeState,7);
        addKeyCallback(Phaser.Keyboard.EIGHT, changeState,8);
        addKeyCallback(Phaser.Keyboard.NINE, changeState,9);
}