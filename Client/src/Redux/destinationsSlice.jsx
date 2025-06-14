import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getDestinations = createAsyncThunk('destinations/get', async () => {
    const response = await axios.get(`${API_BASE_URL}/destinations`);
    console.log("destignation data ", response.data)
    return response.data;
});


const destinationsSlice = createSlice({
    name: 'destinations',
    initialState: { data: [], loading: false },
    extraReducers: (builder) => {
        builder
            .addCase(getDestinations.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDestinations.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            });
    },
});

export default destinationsSlice.reducer;
