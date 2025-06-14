import { configureStore } from '@reduxjs/toolkit';
import destinationsReducer from './destinationsSlice';
import packagesReducer from './packagesSlice';

export const store = configureStore({
  reducer: {
    destinations: destinationsReducer,
    packages: packagesReducer,
  },
});
