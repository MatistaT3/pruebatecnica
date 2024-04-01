import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../features/posts/postSlice';

function PostForm() {
  const [post, setPost] = useState({ title: '', description: '' });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    const newPost = await response.json();
    dispatch(addPost(newPost));
    setPost({ title: '', description: '' });
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <form className='w-4/6 mx-auto' onSubmit={handleSubmit}>
      <div className='flex justify-between items-center py-4'>
        <input
          name='title'
          value={post.title}
          onChange={handleChange}
          placeholder='Nombre'
          className='mr-2 border border-gray-700 rounded px-2 py-1 bg-gray-700'
        />
        <input
          name='description'
          value={post.description}
          onChange={handleChange}
          placeholder='Descripción'
          className='mr-2 border border-gray-700 rounded px-2 py-1 bg-gray-700'
        />
        <button className='bg-indigo-800 px-2 py-1 rounded-md' type='submit'>
          Crear
        </button>
      </div>
    </form>
  );
}

export default PostForm;
