// Packages
let mongoose = require("mongoose");

// Database schema
let musicSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  music: {
    type: Object,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});
let Music = mongoose.model("Music", musicSchema);
module.exports = Music;
