var express = require('express'),
  app = express(),
  port = 9001,
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  mongoUri = 'mongodb://localhost:27017/somanybirds',
  userCtrl = require('./server-assets/controllers/userCtrl'),
  birdCtrl = require('./server-assets/controllers/birdCtrl'),
  sightingCtrl = require('./server-assets/controllers/sightingCtrl');


app.use(bodyParser.json(), cors(), express.static(__dirname + "/public"));

// app.post("/api/sightings", sightingCtrl.addSighting);

//User Endpoints
app.post("/api/user", userCtrl.addUser);
app.get("/api/user", userCtrl.getUsers);

//Bird Endpoints
app.post("/api/bird", birdCtrl.addBird);
app.get("/api/bird", birdCtrl.getBirds);

//Sightings Endpoint
app.post("/api/sightings", sightingCtrl.addSighting);
app.get("/api/sightings", sightingCtrl.getSightings);



app.listen(port, function(){
	console.log("listening on port: ", port);
});

mongoose.connect(mongoUri);
mongoose.connection.once("open", function(){
	console.log("db connected");
});
