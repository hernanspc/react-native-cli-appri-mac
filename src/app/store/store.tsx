import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice';
import plansSlice from '../slice/plansSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        plans: plansSlice,
    },
});

export default store;
