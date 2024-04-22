import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { calculateAge, parseDate } from '../../utils/functions';

interface UserState {
    data: {
        name: string;
        lastName: string;
        birthDay: string;
    } | null;
    loading: boolean;
    error: string | null;
}


const initialState: UserState = {
    data: null,
    loading: false,
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchUserSuccess: (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchUserFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } = userSlice.actions;

export default userSlice.reducer;

export const fetchUser = () => async (dispatch: any) => {
    dispatch(fetchUserStart());
    try {
        const response = await axios.get('https://rimac-front-end-challenge.netlify.app/api/user.json');
        const birthYear = parseDate(response.data.birthDay);
        const age = calculateAge(birthYear);

        dispatch(fetchUserSuccess({ ...response.data, age }));
    } catch (error: any) { // Especificamos que error es de tipo any
        dispatch(fetchUserFailure(error.message));
    }
};



