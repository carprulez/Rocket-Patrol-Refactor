class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload () {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion1', './assets/voiceExplosion1.wav');
        this.load.audio('sfx_explosion2', './assets/voiceExplosion2.wav');
        this.load.audio('sfx_explosion3', './assets/voiceExplosion3.wav');
        this.load.audio('sfx_explosion4', './assets/voiceExplosion4.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.image('titleScreenSpace', './assets/titleScreenSpace.png')
    }

    create() {
        let titleConfig = { 
            fontFamily: 'Futura',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '16px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.titleScreenSpace = this.add.tileSprite(0, 0, 640, 480, 'titleScreenSpace').setOrigin(0, 0);

        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', titleConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, (game.config.height/2) + 5, 'Controls: Use left and right arrows to move & (F) key to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press left arrow for Easy or right arrow for Hard', menuConfig).setOrigin(0.5);
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
    }
}
