import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Plan {
    id: string;
    name: string;
    description: [];
    price: number;
}

interface PlansState {
    data: Plan[];
    loading: boolean;
    error: string | null;
}

const initialState: PlansState = {
    data: [],
    loading: false,
    error: null,
};

export const plansSlice = createSlice({
    name: 'plans',
    initialState,
    reducers: {
        fetchPlansStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchPlansSuccess: (state, action: PayloadAction<Plan[]>) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchPlansFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchPlansStart, fetchPlansSuccess, fetchPlansFailure } = plansSlice.actions;

export const fetchPlans = () => async (dispatch: any) => {
    dispatch(fetchPlansStart());
    try {
        const response = await axios.get('https://rimac-front-end-challenge.netlify.app/api/plans.json');
        dispatch(fetchPlansSuccess(response.data));
    } catch (error: any) {
        dispatch(fetchPlansFailure(error.message));
    }
};

export default plansSlice.reducer;
