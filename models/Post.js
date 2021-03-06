const mongoose = require('mongoose')
const Schema =  mongoose.Schema


const PostSchema = new mongoose.Schema({

    title: { type : String, required : true},
    content: { type : String, required : true},
    date : { type: Date, default : Date.now },
    post_image : { type: String, required:true },
    siteUser : {
        type: Schema.Types.ObjectId,
        ref:'users' // MongoDB collection name: users
    },
    category : {
        type : Schema.Types.ObjectId,
        ref:'categories',
        required:true
    }

})



module.exports = mongoose.model('Post',PostSchema)