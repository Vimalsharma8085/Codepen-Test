

import { configureStore } from '@reduxjs/toolkit';
import codeReducer from './codeSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    code: codeReducer,
    user: userReducer,
  },
});

export default store;

