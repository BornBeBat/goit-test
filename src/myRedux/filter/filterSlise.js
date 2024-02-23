import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: 'all',
};

const filterSlise = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  selectors: { selectFilter: state => state.filter },
});

export const filterReducer = filterSlise.reducer;
export const { setFilter } = filterSlise.actions;
export const { selectFilter } = filterSlise.selectors;
