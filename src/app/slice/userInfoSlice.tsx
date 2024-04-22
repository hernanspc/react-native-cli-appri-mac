import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    data: {
        nrodoc: string;
        phone?: string;
    }
}

const initialState: UserState = {
    data: {
        nrodoc: '',
        phone: '',
    },
};

export const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setNrodoc: (state, action: PayloadAction<string>) => {
            if (state.data) {
                state.data.nrodoc = action.payload;
            }
        },
        setPhone: (state, action: PayloadAction<string>) => {
            if (state.data) {
                state.data.phone = action.payload;
            }
        },
    },
});

export const { setNrodoc, setPhone } = userSlice.actions;

export default userSlice.reducer;
