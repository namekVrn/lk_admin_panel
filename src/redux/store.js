import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import clientsReducer from './clients/clients-reducer';

const middleware = [
  ...getDefaultMiddleware({
    
  }),
  // logger,
];
const store = configureStore({
    reducer: {
      clients: clientsReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware
  });
  export default store;