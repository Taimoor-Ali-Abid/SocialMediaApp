// postslice.js
import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],  // array of post objects
  },
  reducers: {
    addPost: (state, action) => { 
        console.log('Adding post:', action.payload, state.posts);
      state.posts.unshift(action.payload);
        // add new post to start of array
    },
    // ...other reducers if any
  },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
