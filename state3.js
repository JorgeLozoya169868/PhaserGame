demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#8AA380';
        addChangeStateEventListeners(); 
    },
    update: function(){}
    
}