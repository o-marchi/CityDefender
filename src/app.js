var HelloWorldLayer = cc.Layer.extend({

    sprite: null,

    // player
    playerX: 0,

    // grid
    grids: [],
    gridNum: 12,

    // enemy
    enemeies: [],
    enemyVel: 10,

    ctor: function () {

        this._super();

        var size = cc.winSize;
        var centerpos = cc.p(size.width / 2, size.height / 2);

        // BACKGROUND
        this.background = new cc.Sprite(CD.assets.background);
        this.background.setPosition(centerpos);
        this.addChild(this.background);

        function isOdd(num) { return num % 2;}

        // GRID
        var gridW = cc.winSize.width / this.gridNum;
        for (var i = 0; i < this.gridNum; i++) {
            if (i % 2) {
                var thsGrid = new cc.Sprite(CD.assets.grid);
                this.grids.push(thsGrid);
                thsGrid.setScaleX(gridW);
                thsGrid.setPosition({
                    x: gridW * i,
                    y: 150
                });
                this.addChild(thsGrid);
            }
        }

        // SHIP
        this.playerX = centerpos.x;
        this.ship = new cc.Sprite(CD.assets.ship);
        this.ship.setPosition({
            x: this.playerX,
            y: 70
        });
        this.addChild(this.ship);

        // ENEMY
        var thsEnemy = new cc.Sprite(CD.assets.enemy);
        thsEnemy.setPosition({
            x: this.rand(0, this.gridNum) * gridW,
            y: 160
        });
        this.enemy = thsEnemy;
        this.addChild(this.enemy);
        window.aaa = this.enemy;

        this.scheduleUpdate(this.update, 1);
        
        return true;
    },

    rand: function(a, b) {
        return ~~(Math.random() * (b-a+1) + a);
    },

    update: function(dt) {

        this.enemy.setPosition({
            x: this.enemy.getPosition().x,
            y: this.enemy.getPosition().y - (dt * this.enemyVel)
        });

        this.ship.setPosition({
            x: this.playerX + this.rand(-10, 10),
            y: 70
        });
    },
});

var HelloWorldScene = cc.Scene.extend({
    
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

