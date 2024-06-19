import { configureStore } from '@reduxjs/toolkit';
import {campsitesReducer} from '../features/campsites/CampsitesSlice';

export const store = configureStore({
  reducer: {
    counter: campsitesReducer,
  },


  
});




