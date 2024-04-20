import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface plansState {
    value: number,
}

const initialState: plansState = {
    value: 0,
}

const plansSlice = createSlice({
    name: '',
    initialState,
    reducers: {
        clear: (state) => {
            state.value = 0;
        }
    }
});