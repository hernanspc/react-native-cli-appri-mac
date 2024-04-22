import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    selectedPlan: {
        name: string;
        price: number;
    } | null;
}

const initialState: UserState = {
    selectedPlan: null,
};

export const planSelectSlice = createSlice({
    name: 'selectedPlan',
    initialState,
    reducers: {
        setSelectedPlan: (state, action: PayloadAction<{ name: string; price: number }>) => {
            state.selectedPlan = action.payload;
        },
    },
});

export const { setSelectedPlan } = planSelectSlice.actions;

export default planSelectSlice.reducer;
