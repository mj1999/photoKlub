const postSchema = require("../models/postSchema");

module.exports.create = async function (req, res) {
  const postData = req.body;
  console.log("Req Body:",postData)
  const newPost = await postSchema.create(postData);
  console.log("new Post from DB:",newPost)
  
  if (newPost) {
    res.status(200).json({
      message: "Post uploaded succesfully",
      data: { newPost},
    });
  }
};