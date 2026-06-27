const multer = require("multer");
const path = require("path");

// Poster Storage
const posterStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/posters");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() + path.extname(file.originalname)
    );
  },
});

// Video Storage
const videoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/videos");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadPoster = multer({
  storage: posterStorage,
});

const uploadVideo = multer({
  storage: videoStorage,
});

module.exports = {
  uploadPoster,
  uploadVideo,
};