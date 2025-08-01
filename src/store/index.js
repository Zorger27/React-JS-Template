// src/store/index.js

import { configureStore } from '@reduxjs/toolkit';
import infoReducer from '@/store/info/infoSlice.js';

const store = configureStore({
  reducer: {
    info: infoReducer,
  },
});

export default store;
