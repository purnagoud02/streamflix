const express = require("express");
const router = express.Router();

const Subscription = require("../models/Subscription");

// GET subscription
router.get("/:userId", async (req, res) => {
  try {
    const sub = await Subscription.findOne({
      userId: req.params.userId,
    });

    res.json(sub);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE / UPDATE subscription
router.post("/", async (req, res) => {
  try {
    const { userId, plan } = req.body;

    let sub = await Subscription.findOne({ userId });

    if (sub) {
      sub.plan = plan;
      sub.isActive = true;
      await sub.save();
    } else {
      sub = await Subscription.create({
        userId,
        plan,
      });
    }

    res.json(sub);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;