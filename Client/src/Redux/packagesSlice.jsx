import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';


export const getPackages = createAsyncThunk('packages/get', async () => {
  const response = await axios.get(`${API_BASE_URL}/packages`);
  return response.data;
});

const packagesSlice = createSlice({
  name: 'packages',
  initialState: { data: [], loading: false },
  extraReducers: (builder) => {
    builder
      .addCase(getPackages.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPackages.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default packagesSlice.reducer;
