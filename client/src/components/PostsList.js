import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchPosts,
  deletePost,
  fetchFilteredPosts,
} from '../features/posts/postSlice';

function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const handleDelete = async (id) => {
    await fetch(`http://localhost:4000/posts/${id}`, {
      method: 'DELETE',
    });
    dispatch(deletePost(id));
  };

  const handleSearch = () => {
    setSearch(filter);
    dispatch(fetchFilteredPosts(filter));
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className='w-4/6 mx-auto'>
      <div className='flex justify-between items-center py-4'>
        <input
          type='text'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder='Filtro de Nombre'
          className='mr-2 border border-gray-700 rounded px-2 py-1 bg-gray-700'
        />
        <button
          onClick={handleSearch}
          className='bg-indigo-800 px-2 py-1 rounded-sm'
        >
          Buscar
        </button>
      </div>
      <table className='w-full text-center'>
        <thead>
          <tr>
            <th className='border p-2'>Nombre</th>
            <th className='border p-2'>Descripción</th>
            <th className='border p-2'>Acción</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className='border p-2'>{post.title}</td>
              <td className='border p-2'>{post.description}</td>
              <td className='border p-2'>
                <button
                  className='bg-indigo-800 px-2 py-1 rounded-md text-xs'
                  onClick={() => handleDelete(post.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default PostsList;
