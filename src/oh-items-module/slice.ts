import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllItems } from './network-layer';

import { IOpenhabItem } from './openHab';

interface IState {
  items: IOpenhabItem[];
}

export const getAllItems = createAsyncThunk(
  'items/fetchAllItems',
  async (thunkAPI) => {
    const response = await fetchAllItems();
    return response;
  }
);

export const persistentStateSlice = createSlice<IState, any>({
  name: 'persistentStateSlice',
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllItems.fulfilled, (state, action) => {
      state.items = state.items.concat(
        action.payload as unknown as IOpenhabItem[]
      );
    });
  },
});

export default persistentStateSlice.reducer;
