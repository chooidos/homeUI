import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllItems } from '../network-layer';
import { IOpenhabItem } from '../types/openHab';

export interface IState {
  items: IOpenhabItem[];
  error: string | null;
}

export const getAllItems = createAsyncThunk<IOpenhabItem[], void>(
  'items/fetchAllItems',
  fetchAllItems,
);

export const indicatorsSlice = createSlice<IState, any>({
  name: 'persistentStateSlice',
  initialState: {
    items: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllItems.fulfilled, (state, action: PayloadAction<IOpenhabItem[]>) => {
      state.items = state.items.concat(action.payload);
    });
    builder.addCase(getAllItems.rejected, (state, action: PayloadAction<any, any>) => {
      state.error = (action as any).error.message;
    });
  },
});

export default indicatorsSlice.reducer;
