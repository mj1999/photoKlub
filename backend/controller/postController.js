const postSchema = require("../models/postSchema");

module.exports.create = async function (req, res) {
  const postData = req.body;
  const newPost = await postSchema.create(postData);
  if (newPost) {
    res.status(200).json({
      message: "Post uploaded succesfully",
      data: { newPost},
    });
  }
};

module.exports.getAll=async function (req,res){
    try
      {
        const allPosts=await postSchema.find()

        if(allPosts)
          res.status(200).json({
            message:"All Post Fetched",
            data:{allPosts}
          })
      }
      catch(err){
        res.status(500).json({
          message:"Server Error",
        })
      }
  
}

module.exports.getOne=async function(req,res){
  try{
    const onePost=await postSchema.findById(req.params.id);
    if(onePost)
      {
        res.status(200).json({
          message:"Post Fetched",
          data:{onePost}
        })
      }
  }
  catch(err){
    res.status(500).json({
      message:"Post Does not Exist",
    })
  }
}