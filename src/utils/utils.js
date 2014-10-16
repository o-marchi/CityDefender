/**
 * CITY DEFENDER
 * Utils
 */
CityDefender.Utils = CD.U = {

	// extend objects
	extend: function(obj1, obj2) {
        for(i in obj2) {
           obj1[i] = obj2[i];
        }

        return obj1;
	}
};