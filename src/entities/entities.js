/**
 * CITY DEFENDER
 * Entities
 */
CityDefender.Entities = CD.E = {

	entities: [],

	default: {
		newInstance: function() {},
		update: function() {},
		render: function() {}
	},

	updateAll: function() {
		for (var i = 0; i < this.entities.length; i++) {
			this.entities[i].update();
		}
	},

	renderAll: function() {
		for (var i = 0; i < this.entities.length; i++) {
			this.entities[i].render();
		}
	},

	extend: function(obj) {
		var newEntity = CD.U.extend(this.default, obj);
		this.entities.push(newEntity);

		return newEntity;
	}
};