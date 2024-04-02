const { Router } = require('express');
const {
  getAllPosts,
  createPost,
  deletePost,
  getFilteredPosts,
} = require('../controllers/posts.controller');

const router = Router();

router.get('/posts', getAllPosts);

router.post('/posts', createPost);

router.delete('/posts/:id', deletePost);

router.get('/posts/:search', getFilteredPosts);

module.exports = router;
