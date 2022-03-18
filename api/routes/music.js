// Packages
const express = require("express");
const router = express.Router();
const musicController = require("../controller/musicController");
const upload = require("../../config/multer");

// Routes
// Get all songs route
router.get("/", musicController.getAllMusics);
// Add songs
router.post("/", upload.upload.single("music"), musicController.addNewMusic);
// Delete song
router.delete("/:musicId", musicController.deleteMusic);

module.exports = router;
