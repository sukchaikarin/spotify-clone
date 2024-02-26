import { createSlice } from "@reduxjs/toolkit";

const membersSlice = createSlice({
    name: "members",
    initialState: {
        memberData: {
        }
    },
    reducers: {
        addMember: (state, action) => {
            state.memberData = action.payload;
        }
    },
});
export const { addMember } = membersSlice.actions;
export default membersSlice.reducer

