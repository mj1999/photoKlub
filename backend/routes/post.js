const express = require("express");
const router = express.Router();
const postController = require("../controller/postController");


router.post("/create", postController.create);
router.get("/",postController.getAll);
router.get("/:id",postController.getOne);

module.exports = router;