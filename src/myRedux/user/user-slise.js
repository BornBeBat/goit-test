import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers } from './user-operations';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const usersSlise = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    return builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = [...state.users, ...action.payload];
      })
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        const { data = [], message } = action.payload;
        state.isLoading = false;
        state.users = [...state.users, ...data];
        state.error = message;
      });
  },
  selectors: {
    selectUsers: state => state.users,
    selectIsLoading: state => state.isLoading,
    selectError: state => state.error,
  },
});

export const usersReducer = usersSlise.reducer;
export const { selectUsers, selectIsLoading, selectError } =
  usersSlise.selectors;
