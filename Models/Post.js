import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    description: {
        type: String,
        max: 255
    },
    likeCount: {
        type: Number
    },
    commentCount: {
        type: Number
    },
    likes: {
        type: [String]
    },
    comments: {
        type: [{
            userId: {
                type: String
            },
            description: {
                type: String
            }
        }]
    },
    //image: unknown type, research AWS S3 object storage
})

export const Post = mongoose.model('Post', postSchema)