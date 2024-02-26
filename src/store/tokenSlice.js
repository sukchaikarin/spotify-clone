import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: "token",
    initialState: {
        tokenData: false,
    },
    reducers: {
        setToken: (state, action) => {
            state.tokenData = action.payload;
        }
    },
});
export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer

