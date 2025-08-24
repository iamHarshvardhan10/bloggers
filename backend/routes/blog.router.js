import express from 'express'
import { verifyUser } from '../middleware/verifyUser.js';
import { createBlog, deleteBlog, editBlog } from '../controllers/blog.controllers.js';
import { isAdmin } from '../middleware/verifyAdmin.js';

const router = express.Router();

// CREATE BLOG
router.post('/create-blog', verifyUser, isAdmin, createBlog)

// UPDATE BLOG
router.put('/update-blog/:blogId', verifyUser, isAdmin, editBlog)

// DELETE BLOG
router.delete('/delete-blog/:blogId', verifyUser, isAdmin, deleteBlog)

export default router;