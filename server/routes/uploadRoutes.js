const express = require("express");
const router = express.Router();

console.log("✅ uploadRoutes.js loaded");

// Test Route
router.get("/", (req, res) => {
  res.json({
    message: "Upload Route Root Working ✅",
  });
});

router.get("/test", (req, res) => {
  res.json({
    message: "Upload Route Test Working ✅",
  });
});

module.exports = router;