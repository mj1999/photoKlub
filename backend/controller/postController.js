const postSchema = require("../models/postSchema");
const commentSchema = require("../models/commentSchema");
const likeSchema = require("../models/likeSchema");
const userSchema = require("../models/userSchema");

module.exports.create = async function (req, res) {
  const postData = req.body;
  const newPost = await postSchema.create(postData);
  if (newPost) {
    const user = await userSchema.findById(req.body.authorId);
    user.posts.push(newPost);
    user.save();
    res.status(200).json({
      message: "Post uploaded succesfully",
      data: { newPost },
    });
  }
};

module.exports.getAll = async function (req, res) {
  try {
    const allPosts = await postSchema
      .find()
      .populate("authorId")
      .populate({
        path: "comments",
        populate: {
          path: "authorId",
        },
      });

    if (allPosts)
      res.status(200).json({
        message: "All Post Fetched",
        data: { allPosts },
      });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports.getOne = async function (req, res) {
  try {
    const onePost = await postSchema.findById(req.params.id);
    if (onePost) {
      res.status(200).json({
        message: "Post Fetched",
        data: { onePost },
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Post Does not Exist",
    });
  }
};

module.exports.delete = async function (req, res) {
  try {
    const post = await postSchema.findByIdAndDelete(req.params.id);
    if (post) {
      await commentSchema.deleteMany({ _id: { $in: post.comments } });
      await likeSchema.deleteMany({ _id: { $in: post.likes } });
      res.status(200).json({
        message: "Post and associated comments/likes deleted",
      });
    } else {
      res.status(404).json({
        message: "No such post found",
      });
      console.log("No such post found");
    }
  } catch (err) {
    res.status(500).json({
      message: `Server Error: ${err}`,
    });
  }
};
