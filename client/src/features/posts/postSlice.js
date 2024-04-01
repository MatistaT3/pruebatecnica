import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import loadPosts from './loadPosts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await loadPosts();
  return response;
});

export const fetchFilteredPosts = createAsyncThunk(
  'posts/fetchFilteredPosts',
  async (filter) => {
    const response = await fetch(
      `http://localhost:4000/posts/${filter.toLowerCase()}`
    );
    const posts = await response.json();
    return posts;
  }
);

export const postSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchFilteredPosts.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const { addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
