var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundImage = draw.bitmap("img/mortal.png");
            backgroundImage.x = 0;
            backgroundImage.y = 0;
            backgroundImage.scaleX = canvasWidth / backgroundImage.image.width; // Scale to canvas width
            backgroundImage.scaleY = groundY / backgroundImage.image.height; // Scale to ground height
            background.addChild(backgroundImage); // Add first to ensure it's behind other el
            var groundImage = draw.rect(canvasWidth, canvasHeight, "black");
            background.addChild(groundImage);

            // TODO 2: - Add a moon and starfield
            for(var i = 0; i < 250; i++){
                var circle = draw.circle(0.5, "white", "LightGray", 0.5);
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random();
                background.addChild(circle);   
            };
            var moon = draw.bitmap("img/stars.png");
            moon.x = canvasWidth - 400;
            moon.y = canvasHeight - 800;
            moon.scaleX = 0.5;
            moon.scaleY = 0.5;
            background.addChild(moon);
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 6; ++i) {
                var buildingColors = ["red", "blue", "red", "silver", "red", "white",];
                var buildingHeight = 700 * Math.random();
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Black", 0.5);
                building.x = 350 * i;
                building.y = groundY - buildingHeight;
                background.addChild(building);
                buildings.push(building);
            
} 

            
            // TODO 3: Part 1 - Add a tree
            /*
            tree = draw.bitmap("img/tree.png");
            tree.x = 0;
            tree.y = groundY-225;
            background.addChild(tree);            
            */
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            /*
            tree.x = tree.x -= 5;

            if (tree.x < -200){
                tree.x = canvasWidth;
            }
            */
            // TODO 4: Part 2 - Parallax
            for(var i = 0; i < buildings.length; i++) {
                var building=buildings[i];
                building.x -= 1.5;
                if(building.x < -100) {
                    building.x = canvasWidth + 100;
                }
            }
        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
