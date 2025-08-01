// src/store/info/infoSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'React',
    version: '19.1.0',
    url: 'https://react.dev',
  },
  {
    id: 2,
    title: 'React Router',
    version: '7.7.1',
    url: 'https://reactrouter.com',
  },
  {
    id: 3,
    title: 'Redux Toolkit',
    version: '2.8.2',
    url: 'https://redux-toolkit.js.org',
  },
  {
    id: 4,
    title: 'Vite',
    version: '7.0.6',
    url: 'https://vitejs.dev',
  },
  {
    id: 5,
    title: 'React i18next',
    version: '15.6.1',
    url: 'https://react.i18next.com',
  },
];

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {},
});

export default infoSlice.reducer;
