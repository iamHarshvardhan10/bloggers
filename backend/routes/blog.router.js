import express from 'express'
import { verifyUser } from '../middleware/verifyUser.js';
import { createBlog, deleteBlog, editBlog } from '../controllers/blog.controllers.js';

const router = express.Router();

// CREATE BLOG
router.post('/create-blog', verifyUser, createBlog)

// UPDATE BLOG
router.put('/update-blog/:blogId', verifyUser, editBlog)

// DELETE BLOG
router.delete('/delete-blog/:blogId', verifyUser, deleteBlog)

export default router;