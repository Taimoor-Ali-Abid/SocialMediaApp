// store.js or redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../slices/postslice'; // adjust path if needed

const store = configureStore({
  reducer: {
    post: postReducer, // ✅ make sure this key is 'post'
  },
});

export default store;
