import { configureStore } from '@reduxjs/toolkit';

import { usersReducer } from './user/user-slise';

export const store = configureStore({
  reducer: { users: usersReducer },
});
