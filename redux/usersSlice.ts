import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsers } from '@/lib/apiClient';
import { User } from '@/types/user';

export const fetchUsers = createAsyncThunk(
    'users/fetch',
    async ({ q, page }: { q: string; page: number }) => {
        return await getUsers(q, page);
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState: { items: [] as User[], total: 0 },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.items = action.payload.users;
            state.total = action.payload.total;
        });
    },
});

export default usersSlice.reducer;
