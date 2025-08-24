import Blog from "../models/blog.model.js";
import User from "../models/user.model.js";

export const createBlog = async (req, res) => {
    try {
        const userId = req.user.id;

        const { title, slug, content, tags } = req.body;

        if (!title || !slug || !content) {
            return res.status(403).json({
                message: 'All Fields Required',
                success: true
            })
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: 'User Not FOund',
                success: false
            })
        }

        const existingPost = await Blog.findOne({ slug })
        if (existingPost) {
            return res.status(409).json({
                message: 'Slug With this Blog Already Created!',
                success: true
            })
        }

        const newBlog = await Blog.create({
            title,
            slug,
            content,
            tags,
            author: userId,
        })

        return res.status(200).json({
            message: 'Blog Created Successfully',
            success: true,
            newBlog
        })


    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message,
            success: false
        })
    }
}