import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { services } from '../../api/services';
import { Product } from '../../types/models';

// Fetching the products from the API and setting the state from the response
// There are 4 states: idle, loading, succeeded, failed
// TO DO: Change 'any' to the correct type
export const fetchProducts = createAsyncThunk<Product[] | any, void, { rejectValue: string }>(
    'products/fetchProductDetails',
    async (_, { rejectWithValue }) => {
        try {
            const data = await services.fetchProductDetails();
            return data;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

interface ProductsState {
    products: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    status: 'idle',
    error: null,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
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
                state.error = action.payload || 'Failed to fetch products';
            });
    },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
