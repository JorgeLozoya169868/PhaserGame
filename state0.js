var demo = {}, centerX = 50, centerY= 500, DinoRed, speed = 5; //Variables
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        //Cargar Assets
        game.load.spritesheet('DinoRed','assets/spritesheets/DinoSpriteRed.png',240,240);
        game.load.image('Street','assets/backgrounds/cyberpunkstreet.png');
        
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE); //Agregar physics en las primeras lineas
        game.stage.backgroundColor = '#800080';// Color del fondo
        console.log('state0 yeii');//La consola dice esto cuando inicia state 0
        addChangeStateEventListeners(); 
        game.scale.scaleMode = Phaser.ScaleManager.Show_ALL; //Reajustar la pantalla
        game.world.setBounds(0, 0, 1900, 600);
        var CyberStreet = game.add.sprite(0,0, 'Street'); //background

       DinoRed = game.add.sprite(centerX, centerY, 'DinoRed' ); //añade el dino al mundo cyberpunk
        DinoRed.anchor.setTo(0.5, 0.5); //not sure,  centerx y centerY, para colocarlo
        DinoRed.scale.setTo(0.7, 0.7); //tamaño
        
        game.physics.enable(DinoRed); //Habilita las fisicas en el Dinosprite
        DinoRed.body.collideWorldBounds = true; //Cuando DinoSprite
        DinoRed.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7]); //Pone los frames del SpriteSheet
    
        //DeadZone
        game.camera.follow(DinoRed);
        game.camera.deadzone = new Phaser.Rectangle(200, 0, 300, 100); //dibujar el rectangulo,(zone.x, zone.y, zone.width, zone.height)
    },
    update: function(){
        //Hacer caminar al DinoSprite
       if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
           DinoRed.scale.setTo(0.7,0.7); //tamaño y direccion
           DinoRed.x += speed;
           DinoRed.animations.play('walk', 14, true);
       }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            DinoRed.scale.setTo(-0.7,0.7); //tamaño y direccion
           DinoRed.x -= speed;
            DinoRed.animations.play('walk', 14, true);
       }
        //Detener la animación del sprite
        else{
            DinoRed.animations.stop('walk');
            DinoRed.frame = 0;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
           DinoRed.y -= speed;
            if (DinoRed.y < 440){
                DinoRed.y = 440; //Mantener a raya al DinoRed del background
            }
       }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
           DinoRed.y += speed;
       }
    }
    
}
//Forma no redundante de cambiar de stage con los numeros
function changeState(i, stateNum){
    console.log('state'+stateNum);
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