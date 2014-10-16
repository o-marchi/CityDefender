/**
 * CITY DEFENDER
 * SCENE: Stage
 */
CityDefender.Scenes.Stage = cc.Scene.extend({

    layers: [],

    addLayers: function() {

        for (var i = 0; i < this.layers.length; i++) {
            this.addChild(this.layers[i]);
        }
    },
    
    onEnter: function() {
        this._super();

        // variables
        this.size = cc.winSize;
        this.centerPos = cc.p(this.size.width / 2, this.size.height / 2);

        CD.Scenes.Stage.getInfo();

        // layers
        this.layers.push(new CD.Scenes.Stage.Background());
        this.layers.push(new CD.Scenes.Stage.MainLayer());
        this.addLayers();
    }
});

CityDefender.Scenes.Stage.getInfo = function() {

    var s = CD.Scenes.Stage;

    // size
    s.size = cc.winSize;
    s.centerPos = cc.p(s.size.width / 2, s.size.height / 2);

    // grid
    s.grid = {};
    s.grid.num = 15;
    s.grid.width = s.size.width / s.grid.num;
};

/**
 * CITY DEFENDER
 * SCENE: Stage
 * LAYER: Background
 */
CityDefender.Scenes.Stage.Background = cc.Layer.extend({

    grids: [],

    ctor: function() {

        this._super();
        this.s = CD.Scenes.Stage;

        this.addBackground();
        this.addGrid();
   
        return true;
    },

    addBackground: function() {
        this.background = new cc.Sprite(CD.assets.background);
        this.background.getTexture().setAliasTexParameters();
        this.background.setPosition(this.s.centerPos);
        this.addChild(this.background);
    },

    addGrid: function() {

        for (var i = 0; i < this.s.grid.num; i++) {

            if (i % 2) { continue; }

            var grid = new cc.Sprite(CD.assets.grid);

            grid.getTexture().setAliasTexParameters();
            grid.setScaleX(this.s.grid.width);
            grid.setAnchorPoint(0, 0);
            grid.setPosition({
                x: this.s.grid.width * i,
                y: 0
            });

            this.addChild(grid);
            this.grids.push(grid);
        }
    }
});

/**
 * CITY DEFENDER
 * SCENE: Stage
 * LAYER: MainLayer
 */
CityDefender.Scenes.Stage.MainLayer = cc.Layer.extend({

    ctor: function() {

        this._super();
        this.s = CD.Scenes.Stage;

        this.player = CD.E.Player.newInstance(this);
        this.scheduleUpdate(this.update, 1);

        cc.log(cc.eventManager.addListener);

        return true;
    },

    update: function() {
        CD.E.updateAll();
    }
});