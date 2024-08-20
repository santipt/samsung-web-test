import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { services } from '../../api/services';
import { Product } from '../../types/models';

// Fetching the products from the API and setting the state from the response
// There are 4 states: idle, loading, succeeded, failed
// TO DO: Change 'any' to the correct type
export const fetchProducts = createAsyncThunk<Product[] | any, void, { rejectValue: any }>(
    'products/fetchProductDetails',
    async (_, { rejectWithValue }) => {
        try {
            const data = await services.fetchProductDetails();
            return data;
        } catch (error) {
            return rejectWithValue((error as Error).message || null);
        }
    }
);

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
