demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#FF00FF';
        addChangeStateEventListeners(); 
    },
    update: function(){}
    
}