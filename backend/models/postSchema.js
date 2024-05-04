const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    heroImage: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "like",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("post", postSchema);
module.exports = Post;
