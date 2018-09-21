demo.state1 = function(){};

var cursors, vel = 400, wall;

demo.state1.prototype = {
    preload: function(){
        //añadir assets
        game.load.tilemap('field','assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON); //Añadir mapa dibujado con TileMaps en formato .json
        game.load.image('SciFi','assets/tilemaps/SciFi.png')// Tener que poner las imagenes que empleamos para diseñar el maa
        game.load.image('UnderWorld','assets/tilemaps/UnderWorld.png')
        //Sprite de DinoRed
        game.load.image('DinoRed','assets/sprites/DinoSpriteRed.png')
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE); //Añadir fisicas al state
       game.stage.backgroundColor = '#2B2B2B';
       addChangeStateEventListeners(); 
        
        var map = game.add.tilemap('field'); //añadir el
        map.addTilesetImage('SciFi');
        map.addTilesetImage('UnderWorld');
        
        var main = map.createLayer('main');
        wall = map.createLayer('wall');
        var muebles = map.createLayer('muebles');
        var workers = map.createLayer('workers');
        var sillas = map.createLayer('sillas');
        
        map.setCollisionBetween(148,221, true, 'wall');
        
        DinoRed = game.add.sprite(200,200,'DinoRed');
        DinoRed.scale.setTo(0.4,0.4);
        game.physics.enable(DinoRed);
        
        cursors = game.input.keyboard.createCursorKeys();
    },
    update: function(){
        game.physics.arcade.collide(DinoRed, wall, function(){console.log('hitting wall')});
        
        if(cursors.up.isDown){
            DinoRed.body.velocity.y = -vel;
        }
        else if(cursors.down.isDown){
            DinoRed.body.velocity.y = vel;
        }
        else{
            DinoRed.body.velocity.y = 0;
        }
        if(cursors.left.isDown){
            DinoRed.body.velocity.x = -vel;
        }
        else if(cursors.right.isDown){
            DinoRed.body.velocity.x = vel;
        }
        else {
            DinoRed.body.velocity.x = 0;
        }
        
    }
    
}