const commentSchema = require("../models/commentSchema");
const postSchema = require("../models/postSchema");

module.exports.create = async function (req, res) {
  try {
    const commentData = req.body;
    const newComment = await commentSchema.create(commentData);
    if (newComment) {
      const post = await postSchema.findById(req.body.postId);
      post.comments.push(newComment);
      post.save();
      res.status(200).json({
        message: "Comment uploaded succesfully",
        data: { newComment },
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Error creating comment: ${err}`,
    });
    console.log(err);
  }
};
