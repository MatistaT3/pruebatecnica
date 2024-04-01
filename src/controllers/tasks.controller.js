const pool = require('../db');

const getAllPosts = async (req, res, next) => {
  try {
    const allPosts = await pool.query('SELECT * FROM posts');
    res.json(allPosts.rows);
  } catch (error) {
    next(error);
  }
};

const createPost = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO posts (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );
    console.log(result);
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM posts WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const getFilteredPosts = async (req, res, next) => {
  try {
    const searchTerm = req.params.search.toLowerCase();
    const filteredPosts = await pool.query(
      'SELECT * FROM posts WHERE LOWER(title) LIKE $1',
      [`%${searchTerm}%`]
    );
    res.json(filteredPosts.rows);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
  getFilteredPosts,
};
