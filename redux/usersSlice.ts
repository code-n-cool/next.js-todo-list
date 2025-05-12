import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '@/types/user';

export const fetchUsers = createAsyncThunk('users/fetch', async ({ q, page }: { q: string, page: number }) => {
    const res = await axios.get(`http://localhost:4000/api/users?q=${q}&page=${page}`);
    return res.data;
});

const usersSlice = createSlice({
    name: 'users',
    initialState: { items: [] as User[], total: 0 },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.items = action.payload.users;
            state.total = action.payload.total;
        });
    }
});

export default usersSlice.reducer;