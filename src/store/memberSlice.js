import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
    name: "member",
    initialState: {
        member: false,
    },
    reducers: {
        setMember: (state, action) => {
            state.member = action.payload;
        }
    },
});
export const { setMember } = memberSlice.actions;
export default memberSlice.reducer

