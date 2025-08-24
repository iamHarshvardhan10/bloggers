import express from 'express'
import { verifyUser } from '../middleware/verifyUser.js';
import { createBlog } from '../controllers/blog.controllers.js';

const router = express.Router();

// CREATE BLOG
router.post('/create-blog', verifyUser, createBlog)


export default router;