const Watchlist = require("../models/Watchlist");

// Add Movie To Watchlist
const addToWatchlist = async (req, res) => {
  try {
    const { userId, movieId } = req.body;

    const item = await Watchlist.create({
      user: userId,
      movie: movieId,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get User Watchlist
const getWatchlist = async (req, res) => {
  try {
    const watchlist = await Watchlist.find({
      user: req.params.userId,
    }).populate("movie");

    res.json(watchlist);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Remove From Watchlist
const removeFromWatchlist = async (req, res) => {
  try {
    await Watchlist.findByIdAndDelete(req.params.id);

    res.json({
      message: "Removed from watchlist",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addToWatchlist,
  getWatchlist,
  removeFromWatchlist,
};