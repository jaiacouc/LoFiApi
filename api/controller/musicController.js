// Packages
const Music = require("../model/Music");

// get all saved music
exports.getAllMusics = async (req, res) => {
  try {
    let music = await Music.find();
    // return all music on success
    res.status(200).json(music);
  } catch (err) {
    // return error
    res.status(500).json(err);
  }
};

// Add new music, look for a request and add to the fields
exports.addNewMusic = async (req, res) => {
  try {
    const music = new Music({
      title: req.body.title,
      artist: req.body.artist,
      music: req.file,
    });
    // wait to finish and save
    let newMusic = await music.save();

    // respond with data on success
    res.status(200).json({ data: newMusic });
  } catch (err) {
    // throw 500 and the error
    res.status(500).json({ error: err });
  }
};

// Delete song based on unid
exports.deleteMusic = async (req, res) => {
  try {
    const id = req.params.musicId;
    // wait then remove the song
    let result = await Music.remove({ _id: id });
    // on success print success message
    res.status(200).json(result);
  } catch (err) {
    // print error
    res.status(500).json(err);
  }
};
