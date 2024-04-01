const loadPosts = async () => {
  const response = await fetch('http://localhost:4000/posts');
  const posts = await response.json();
  return posts;
};

export default loadPosts;
