const express = require("express");
var cors = require('cors')
var bodyParser = require('body-parser')
var db = require('./models');

const passport = require('passport');
const app = express();
const PORT = process.env.PORT || 3001


app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/users')
var Donations = require('./routes/api/donations')
var Vendors = require('./routes/api/vendors')

app.use('/users', Users)
app.use('/api', Donations)
app.use('/vendors', Vendors)

// Define middleware here
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/public/images'));

// Start the API server
// 
db.sequelize.sync( {force: true}  ).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});