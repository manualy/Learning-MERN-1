import express from 'express';

// kod API 
import { getPosts, createPost } from '../APIcontrollers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

export default router;