import React, { useEffect } from 'react';
import { fetchProducts } from '../redux/slices/productsListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';

function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const { products, status, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    return (
        <div>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {status === 'succeeded' && (
                products.map((product : any) => (
                    <p key={product?.fmyEngName}>{product?.fmyEngName}</p>
                ))
            )}
        </div>
    );
}

export default Home;
