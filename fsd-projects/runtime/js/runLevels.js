var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE


    function createSawBlade(x, y, damage){
      var hitZoneSize =25;
      var damageFrommObstacle = damage; 
      var sawBladeHitZone = game.createObstal(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap('img/sawblade.png');
      obstacleImage.x = 25;
      obstacleImage.y = 25;
      sawBladeHitZone.addChild(obstacleImage);
    }

    function createEnemy(){
      var ememy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = 25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = 400;
      enemy.y = groundY - 50;
      game.addGameItem(enemy);
      enemy.VelocityX = -2;
      enemy.onPlayerCollison = function(){

      }
    }
    

    function startLevel() {
      // TODO 13 goes below here

      createSawBlade(400, groundY - 125, 10);
      createSawBlade(600, groundY - 125, 10);
      createSawBlade(800, groundY - 125, 10);
      createEnemy(400, groundY - 50, -3);
      createEnemyt(900, groundY - 50, -3);




      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
