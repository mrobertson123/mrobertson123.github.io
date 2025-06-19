var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: 100,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 125, damage: 10},
          { type: "sawblade", x: 600, y: groundY - 125, damage: 10},
          { type: "sawblade", x: 800, y: groundY - 125, damage: 10},
          { type: "sawblade", x: 925, y: groundY - 20, damage: 10},
          { type: "sawblade", x: 725, y: groundY - 10, damage: 10},
          { type: "sawblade", x: 505, y: groundY - 10, damage: 10},
          { type: "enemy", x: 800, y: groundY - 50, speed: -3, damage: 10, image: "img/horry.png", offsetX: 0.5, offsetY: 0.5, scale: 0.2},
          { type: "enemy", x: 1000, y: groundY - 50, speed: -2, damage: 10, image: "img/horry.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 1200, y: groundY - 50, speed: -2, damage: 10, image: "img/roster (1).png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 1400, y: groundY - 50, speed: -2, damage: 10, image: "img/roster (1).png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 1500, y: groundY - 50, speed: -2, damage: 10, image: "img/horry.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 1685, y: groundY - 50, speed: -2, damage: 10, image: "img/horry.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "reward", x: 1500, y: groundY - 135, speed: -2},
          { type: "marker", x: 2000, y: groundY - 75, speed: -2},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 300, y: groundY - 125, damage: 20},
          { type: "sawblade", x: 500, y: groundY - 125, damage: 20},
          { type: "sawblade", x: 655, y: groundY - 125, damage: 20},
          { type: "sawblade", x: 900, y: groundY - 125, damage: 10},
          { type: "sawblade", x: 755, y: groundY - 10, damage: 20},
          { type: "sawblade", x: 425, y: groundY - 20, damage: 20},
          { type: "sawblade", x: 930, y: groundY - 10, damage: 10},
          { type: "sawblade", x: 1100, y: groundY - 10, damage: 10},
          { type: "enemy", x: 625, y: groundY - 50, speed: -3, damage: 10, image: "img/roster (1).png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 800, y: groundY - 50, speed: -3, damage: 10, image: "img/roster (1).png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 1000, y: groundY - 50, speed: -2, damage: 10, image: "img/horry.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 1200, y: groundY - 50, speed: -2, damage: 10, image: "img/horry.png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 1400, y: groundY - 50, speed: -2, damage: 10, image: "img/roster (1).png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "enemy", x: 1500, y: groundY - 50, speed: -2, damage: 10, image: "img/roster (1).png", offsetX: -35, offsetY: -25, scale: 0.5},
          { type: "reward", x: 1800, y: groundY - 125, speed: -3, damage: 10},
          { type: "marker", x: 1900, y: groundY - 130, speed: -3},

        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
