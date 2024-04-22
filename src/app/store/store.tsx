import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice';
import plansReducer from '../slice/plansSlice';
import userInfoReducer from '../slice/userInfoSlice';
import selectedPlanReducer from '../slice/planSelectSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        plans: plansReducer,
        userInfo: userInfoReducer,
        selectedPlan: selectedPlanReducer
    },
});

export default store;
