const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  likeType: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "post",
  },
});

const Likes = mongoose.model("like", likeSchema);

module.exports = Likes;
