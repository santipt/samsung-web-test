import { configureStore } from '@reduxjs/toolkit';
import productsListReducer from './slices/productsListSlice';

const store = configureStore({
    reducer: {
        products: productsListReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;