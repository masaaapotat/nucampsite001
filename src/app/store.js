import { configureStore } from '@reduxjs/toolkit';
import {campsitesReducer} from '../features/campsites/CampsitesSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { commentsReducer } from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer, comments:commentsReducer,
    
    partners:partnersReducer,
    promotions:promotionsReducer
  }
});




