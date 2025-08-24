import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        unqiue: true,
        lowercase: true
    },
    content: {
        type: String,
        required: true
    },
    coverImage: {
        type: String
    },
    tags: {
        type: [String]
    },
    status: {
        type: String,
        enum: ['Draft', 'Published'],
        default: "Draft"
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    likesCount: {
        type: Number,
        default: 0
    },
}, { timestamps: true })


const Blog = mongoose.model('Blog', blogSchema)

export default Blog;