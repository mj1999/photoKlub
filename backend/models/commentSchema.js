const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    commentBody:{
        type:String,
    },
    authorId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"post"
    }

});

const Comment=mongoose.model("comment", commentSchema);

module.exports=Comment