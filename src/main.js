// Carter Gruebel
// Rocket Patrol Reboot: Ready for Takeoff
// 12 hours
// Mods: creating a particle explosion - 5 points, creating four new sound effects - 3 points, display time remaining - 3 points,
// new title screen - 3 points, parallax scrolling - 3 points, new scrolling tile sprite - 1 point, implement fire UI text - 1 point,
// implement speed increase at 30 seconds - 1 point

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;