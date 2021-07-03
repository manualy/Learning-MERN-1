import express from 'express';

// kod API 
import { getPosts } from '../APIcontrollers/posts.js';

const router = express.Router();

router.get('/', getPosts);

export default router;