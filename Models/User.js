import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: { 
        type: String,
        min: 4,
        max: 100
    },
    email: {
        type: String,
        min: 5,
        max: 255,
    },
    password: {
        type: String,
        min: 8,
        max: 100
    },
    dateCreated: { 
        type: Date
    },
    numFollowers: {
        type: Number
    },
    numFollowing: {
        type: Number
    },
    numPosts: {
        type: Number
    },
    followersList: {
        type: [String]
    },
    followingList: {
        type: [String]
    },
    postList: {
        type: [String]
    }
})

export const User = mongoose.model("User", userSchema)