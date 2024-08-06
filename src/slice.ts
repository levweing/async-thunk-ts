import {createSlice} from "@reduxjs/toolkit";
import {fetchUsers} from "./actions.ts";
import {UsersState} from "./types.ts";

const usersSlice = createSlice({
    name: "users",
    initialState: {} as UsersState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.data = [];
                state.isLoading = true;
                state.isCanceled = false;
                state.error = "";
            })
            .addCase(fetchUsers.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.data = payload;
            })
            .addCase(fetchUsers.rejected, (state, {meta, error}) => {
                state.isLoading = false;

                if (meta.aborted) {
                    state.isCanceled = true;
                    console.log("Error:", error);
                } else {
                    state.error = error.message;
                }
            });
    }
});

export default usersSlice.reducer;
