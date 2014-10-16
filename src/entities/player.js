/**
 * CITY DEFENDER
 * ENTITY: Player
 */
CityDefender.Entities.Player = CityDefender.Entities.extend({

	sprite: undefined,

	newInstance: function(layer) {
		this.sprite = new cc.Sprite(CD.assets.ship);

        this.sprite.getTexture().setAliasTexParameters();
        this.sprite.setPosition({
            x: 50,
            y: 70
        });
        layer.addChild(this.sprite);

		return this;
	},

	update: function() {
		cc.log('player update');
	}
});
