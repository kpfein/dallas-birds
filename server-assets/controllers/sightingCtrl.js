var Sighting = require("../models/sighting")

module.exports = {
	addSighting: function(req, res){
		var newSighting = new Sighting(req.body);
		newSighting.save().then(function(result){
			return res.send("sighting added");
		})
	},

	getSightings: function(req, res){
		Sighting.find(req.query).exec().then(function(result){
			return res.send(result)
		})
	}
}