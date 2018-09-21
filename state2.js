var DinoRed, Fire, velocity = 1500;

demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){
        game.load.image('DinoRed','assets/sprites/DinoSpriteRed.png');
        game.load.image('Fire','assets/sprites/FireSprite.png');
        
    },
    create: function(){
       game.stage.backgroundColor = '#bbAAf5';
       addChangeStateEventListeners();
        
        DinoRed = game.add.sprite(400,300, 'DinoRed');
        DinoRed.anchor.setTo(0.5);
        DinoRed.scale.setTo(0.5);
        
        Fire = game.add.group();
        Fire.enableBody = true;
        Fire.physicsBodyType = Phaser.Physics.ARCADE;
        Fire.createMultiple(5000,'Fire');
        
    },
    update: function(){
        DinoRed.rotation = game.physics.arcade.angleToPointer(DinoRed);
        if (game.input.activePointer.isDown){
            this.Shot();
        }
    },
    Shot: function(){
    console.log('firing');
        var bulletfire = Fire.getFirstDead();
        bulletfire.reset(400,300);
        
        game.physics.arcade.moveToPointer(bulletfire,velocity);
        bulletfire.rotation = game.physics.arcade.angleToPointer(bulletfire);
    }
    
}