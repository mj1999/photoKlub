const express = require("express");
const router = express.Router();
const commentController = require("../controller/commentController");

router.post("/create", commentController.create);

module.exports = router;
