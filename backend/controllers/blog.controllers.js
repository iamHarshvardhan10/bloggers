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


// EDIT BLOG

export const editBlog = async (req, res) => {
    try {
        const userId = req.user.id;
        const blogId = req.params.blogId;
        if (!userId) {
            return res.status(404).json({
                message: 'User Not Found',
                success: false
            })
        }

        const { title, content, tags } = req.body;
        if (!title || !content || !tags) {
            return res.status(400).json({
                message: 'All fields are required',
                success: false
            })
        }

        const updatedBlog = await Blog.findByIdAndUpdate(blogId, {
            title, content, tags

        }, { new: true })

        if (!updatedBlog) {
            return res.status(404).json({
                message: 'Blog with id is not found',
                success: false
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Blog Edited Successfully',
            updatedBlog
        })


    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: error.message
        })
    }
}


// DELETE BLOG

export const deleteBlog = async (req, res) => {
    try {
        const { blogId } = req.params;  

        if (!blogId) {
            return res.status(400).json({
                message: 'Blog ID required to delete',
                success: false
            });
        }

        const blogExist = await Blog.findById(blogId);
        if (!blogExist) {
            return res.status(404).json({
                message: 'Blog with this ID not found',
                success: false
            });
        }

        const deletedBlog = await Blog.findByIdAndDelete(blogId);

        return res.status(200).json({
            message: 'Blog deleted successfully',
            success: true,
            deletedBlog
        });

    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: error.message
        });
    }
};
