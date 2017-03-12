// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var songSchema = new Schema({
  id: {type: Number, require: true, unique: true},
  title: String,
  artist: String,
  url: String
});

var Song = mongoose.model('Song', songSchema);

// make this available to our users in our Node applications
module.exports = Song;
