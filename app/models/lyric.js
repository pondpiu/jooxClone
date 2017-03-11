// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var lyricSchema = new Schema({
  lyric_id: {type: Number, require: true, unique: true},
  lyric_body: String,
  lyric_language: String,
  version: String
});

// the schema is useless so far
// we need to create a model using it
var Lyric = mongoose.model('Lyric', lyricSchema);

// make this available to our users in our Node applications
module.exports = Lyric;
