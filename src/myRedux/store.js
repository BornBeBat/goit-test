import { configureStore } from '@reduxjs/toolkit';

import { usersReducer } from './user';
import { filterReducer } from './filter';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: filterReducer,
  },
});
