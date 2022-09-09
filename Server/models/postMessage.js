import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String, //convert image into string
    likeCount: {
        type:Number,
        default:0
    },
    createdAt: {
        type:Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;