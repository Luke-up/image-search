import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

// Central Redux store for app-wide image and modal state.
const store = configureStore({
  reducer,
});

export default store;